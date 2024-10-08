<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Detail;
use App\Models\Payment;
use App\Models\Product;
use App\Models\Sale;
use App\Models\Viaje;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller{
    function saleAnular(Request $request){
        try {
            DB::beginTransaction();
            $sale = Sale::find($request->id);
            $sale->status = 'ANULADO';
            $sale->motivo_anulacion = $request->motivo;
            $sale->save();

            $details = Detail::where('sale_id', $sale->id)->get();
            foreach ($details as $detail){
                $product = Product::find($detail->product_id);
                $product->stock += $detail->quantity;
                $product->save();
            }
            DB::commit();
            return $sale;
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json($e->getMessage(), 500);
        }
    }
    function salesGastos(Request $request){
        $fechaInicioSemana = $request->fechaInicioSemana.' 00:00:00';
        $fechaFinSemana = $request->fechaFinSemana.' 23:59:59';
        $concepto = $request->concepto;
        $user = $request->user();
        if ($user->id == 1){
            $sales = Sale::whereBetween('date', [$fechaInicioSemana, $fechaFinSemana])
                ->where('description', 'LIKE', "%$concepto%")
                ->where('tipo_venta', 'EGRESO')
                ->with(['user', 'client', 'details','boat'])
                ->orderBy('id', 'desc')
                ->get();
        }else{
            $sales = Sale::whereBetween('date', [$fechaInicioSemana, $fechaFinSemana])
                ->where('description', 'LIKE', "%$concepto%")
                ->where('user_id', $user->id)
                ->where('tipo_venta', 'EGRESO')
                ->with(['user', 'client', 'details','boat'])
                ->orderBy('id', 'desc')
                ->get();
        }
        return response()->json($sales);
    }
    public function index(Request $request){
        $fechaInicioSemana = $request->fechaInicioSemana.' 00:00:00';
        $fechaFinSemana = $request->fechaFinSemana.' 23:59:59';
        $concepto = $request->concepto;
        $user = $request->user();
        if ($user->id == 1){
            $sales = Sale::whereBetween('date', [$fechaInicioSemana, $fechaFinSemana])
                ->where('description', 'LIKE', "%$concepto%")
                ->with(['user', 'client', 'details','boat'])
                ->orderBy('id', 'desc')
                ->get();
        }else{
            $sales = Sale::whereBetween('date', [$fechaInicioSemana, $fechaFinSemana])
                ->where('description', 'LIKE', "%$concepto%")
                ->where('company_id', $user->company_id)
                ->with(['user', 'client', 'details','boat'])
                ->orderBy('id', 'desc')
                ->get();
        }
        return response()->json($sales);
    }
    function debtors(Request $request){
        $search = $request->search;
        $user = $request->user();
        if ($user->id == 1) {
            $debtors = Sale::with('client', 'user', 'details', 'payments.user')
                ->where('tipo', 'CREDITO')
                ->where(function ($query) use ($search) {
                    $query->whereHas('client', function ($query) use ($search) {
                        $query->where('name', 'like', "%$search%");
                    })
                        ->orWhereHas('user', function ($query) use ($search) {
                            $query->where('name', 'like', "%$search%");
                        });
                })
                ->orderBy('id', 'desc')
                ->get();
        } else {
            $debtors = Sale::with('client', 'user', 'details', 'payments.user')
                ->where('company_id', $user->company_id)
                ->where('tipo', 'CREDITO')
                ->where(function ($query) use ($search) {
                    $query->whereHas('client', function ($query) use ($search) {
                        $query->where('name', 'like', "%$search%");
                    })
                        ->orWhereHas('user', function ($query) use ($search) {
                            $query->where('name', 'like', "%$search%");
                        });
                })
                ->orderBy('id', 'desc')
                ->get();
        }

        foreach ($debtors as $debtor){
            $pago = Payment::where('sale_id', $debtor->id)->where('status', 'PAGADO')->sum('amount');
            $debtor->pago = $pago;
            $debtor->debt = $debtor->total - $pago;
        }
        return $debtors;
    }
    function upsertClient(Request $request){
        $nit = $request->nit;
        $name = $request->name;
        $phone = isset($request->phone) ? $request->phone : '';
        $search = Client::where('nit', $nit)->first();
        if ($search == null){
            $client = new Client();
            $client->nit = $nit;
            $client->name = $name;
            $client->phone = $phone;
            $client->save();
        }else{
            $client = $search;
            $client->name = $name;
            $client->phone = $phone;
            $client->save();
        }
        return $client;
    }
    public function store(Request $request){
        $user_id = $request->user()->id;

        $client = $this->upsertClient($request);

        $sale = $this->saleInsert($request, $user_id,$client);
        $this->creditoInsert($sale, $request, $user_id);
        $description= '';
        $products = $request->products;
        foreach ($products as $product){
            $details = new Detail();
            $details->sale_id = $sale->id;
            $details->product_id = $product['id'];
            $details->user_id = $user_id;
            $details->product_name = $product['name'];
            $details->quantity = $product['quantity'];
            $details->price = $product['price'];
            $details->total = $product['quantity'] * $product['price'];
            $details->save();
            $sale->total += $details->total;

            // Update stock
            $productFind = Product::find($product['id']);
            $productFind->stock -= $product['quantity'];
            $productFind->save();

            // Description
            $description .= $product['quantity'] .' '.$product['name'].', ';
        }
        $description = substr($description, 0, -2);
        $sale->description = $description;
        $sale->save();
        return Sale::with('client', 'user', 'details')->where('id', $sale->id)->first();
    }

    /**
     * @param Request $request
     * @param $user_id
     * @return array
     */
    public function saleInsert(Request $request, $user_id,$client){
        $sale = new Sale();
        $sale->date = date('Y-m-d H:i:s');
        $sale->client_id = $client->id;
        $sale->total = 0;
        $sale->tipo = $request->tipo;
        $sale->user_id = $user_id;
        $sale->observacion = $request->observacion;
        $sale->pago = $request->pago;
        $sale->company_id = $request->user()->company_id;
        $sale->save();
        return $sale;
    }

    /**
     * @param Sale|array $sale
     * @param Request $request
     * @param $user_id
     * @return void
     */
    public function creditoInsert(Sale|array $sale, Request $request, $user_id): void
    {
        if ($sale->tipo == 'CREDITO' && $request->monto > 0) {
            $payment = new Payment();
            $payment->sale_id = $sale->id;
            $payment->user_id = $user_id;
            $payment->amount = $request->monto;
            $payment->date = date('Y-m-d H:i:s');
            $payment->save();
        }
    }
    public function registrarGasto(Request $request){
        if ($request->concepto == '' || $request->concepto == null || isset($request->concepto) == false) {
            $request->merge(['concepto' => 'GASTO' . date('Y-m-d H:i:s')] );
        }
        $viaje = Viaje::find($request->viaje_id);
        if ($viaje){
            $viaje_id = $viaje->id;
            $boat_id = $viaje->boat_id;
        }else{
            $viaje_id = null;
            $boat_id = null;
        }
        $sale = new Sale();
        $sale->date = $request->date;
        $sale->client_id = $request->client_id;
        $sale->total = $request->monto;
        $sale->tipo = 'CONTADO';
        $sale->tipo_venta = 'EGRESO';
        $sale->user_id = $request->user()->id;
        $sale->observacion = $request->concepto;
        $sale->pago = $request->metodo;
        $sale->description = $request->concepto;
        $sale->numeroFactura = $request->numeroFactura;
        $sale->viaje_id = $viaje_id;
        $sale->boat_id = $boat_id;
        $sale->save();
//        $sales.blade.php = Sale::whereBetween('date', [$fechaInicioSemana, $fechaFinSemana])
//            ->where('description', 'LIKE', "%$concepto%")
//            ->with(['user', 'client', 'details'])
//            ->orderBy('id', 'desc')
//            ->get();
        return Sale::with('client', 'user', 'details')->where('id', $sale->id)->first();

    }
}
