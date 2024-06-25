<?php

namespace App\Http\Controllers;

use App\Models\Detail;
use App\Models\Payment;
use App\Models\Product;
use App\Models\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller{
    public function index(Request $request){
        $fechaInicioSemana = $request->fechaInicioSemana.' 00:00:00';
        $fechaFinSemana = $request->fechaFinSemana.' 23:59:59';
        $concepto = $request->concepto;
        $sales = Sale::whereBetween('date', [$fechaInicioSemana, $fechaFinSemana])
            ->where('description', 'LIKE', "%$concepto%")
            ->with(['user', 'client', 'details'])
            ->orderBy('id', 'desc')
            ->get();
        return response()->json($sales);
    }
    function debtors(Request $request){
        $search = $request->search;
        $debtors = Sale::with('client', 'user', 'details', 'payments.user')
            ->where('tipo', 'CREDITO')
            ->where(function($query) use ($search) {
                $query->whereHas('client', function($query) use ($search){
                    $query->where('name', 'like', "%$search%");
                })
                ->orWhereHas('user', function($query) use ($search){
                    $query->where('name', 'like', "%$search%");
                });
            })
            ->orderBy('id', 'desc')
            ->get();

        foreach ($debtors as $debtor){
            $pago = Payment::where('sale_id', $debtor->id)->where('status', 'PAGADO')->sum('amount');
            $debtor->pago = $pago;
            $debtor->debt = $debtor->total - $pago;
        }
        return $debtors;
    }
    public function store(Request $request){
        $user_id = $request->user()->id;

        $sale = $this->saleInsert($request, $user_id);
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
    public function saleInsert(Request $request, $user_id){
        $sale = new Sale();
        $sale->date = date('Y-m-d H:i:s');
        $sale->client_id = $request->client_id;
        $sale->total = 0;
        $sale->tipo = $request->tipo;
        $sale->user_id = $user_id;
        $sale->observacion = $request->observacion;
        $sale->pago = $request->pago;
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
}
