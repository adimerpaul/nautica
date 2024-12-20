<?php

namespace App\Http\Controllers;

use App\Models\Boat;
use App\Models\Descarga;
use App\Models\Detail;
use App\Models\LanceProducto;
use App\Models\Product;
use App\Models\ProductoViaje;
use App\Models\Sale;
use App\Models\Viaje;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use function Laravel\Prompts\error;

class ViajeController extends Controller{
    function viajesConciliacion($id, Request $request){
        $fechaInicio = $request->input('fechaIni');
        $fechaFin = $request->input('fechaFin');
        $user = $request->user();
        $viaje = Viaje::with(['boat','productos.product'])->find($id);
        $productos = Product::where('company_id', $user->company_id)->get();
        $productoRes= [];
        foreach ($productos as $producto){
            $cantidadDescarga = ProductoViaje::where('viaje_id', $id)
                ->whereHas('descarga', function($query) use ($fechaInicio, $fechaFin){
                    $query->where('status', 'ACTIVO');
                    $query->where('fecha', '>=', $fechaInicio);
                    $query->where('fecha', '<=', $fechaFin);
                })
                ->where('product_id', $producto->id)
                ->sum('cantidad');

            $cantidadLance = LanceProducto::whereHas('lance', function($query) use ($id, $fechaInicio, $fechaFin){
                $query->where('viaje_id', $id);
                $query->where('fecha', '>=', $fechaInicio);
                $query->where('fecha', '<=', $fechaFin);
            })
                ->where('product_id', $producto->id)
                ->sum('cantidad');

            $cantidadSales = Detail::whereHas('sale', function($query) use ($fechaInicio, $fechaFin){
                $query->where('date', '>=', $fechaInicio);
                $query->where('date', '<=', $fechaFin);
            })
                ->where('product_id', $producto->id)
                ->sum('quantity');
            $productoRes[] = [
                'name' => $producto->name,
                'descarga' => $cantidadDescarga,
                'lances' => $cantidadLance,
                'ventas' => $cantidadSales,
                'inventario' => $producto->stock
            ];
        }

        return [
            'viaje' => $viaje,
            'productos' => $productoRes
        ];
    }
    function viajesActivos(Request $request){
        $fechaInicio = $request->input('fechaInicio');
        $fechaFin = $request->input('fechaFin');
        $user = $request->user();
        if ($user->id == 1) {
            $viajes = Viaje::where('fechaInicio', '>=', $fechaInicio)
                ->where('fechaInicio', '<=', $fechaFin)
                ->where('estado', 'Activo')
                ->with(['boat','crews'])
                ->orderBy('id', 'desc')
                ->get();
        }else{
            $viajes = Viaje::where('fechaInicio', '>=', $fechaInicio)
                ->where('fechaInicio', '<=', $fechaFin)
                ->where('estado', 'Activo')
                ->where('company_id', $user->company_id)
                ->with(['boat','crews'])
                ->orderBy('id', 'desc')
                ->get();
        }
//        $viajes = Viaje::where('fechaInicio', '>=', $fechaInicio)
//            ->where('fechaInicio', '<=', $fechaFin)
//            ->where('estado', 'Activo')
//            ->with(['boat','crews'])
//            ->orderBy('id', 'desc')
//            ->get();
        return $viajes;
    }
    public function productAnular(Request $request, $id){
//        $productoViaje = ProductoViaje::find($id);
//        $productoViaje->status = 'INACTIVO';
//        $productoViaje->save();
//        //disminuir en producto la cantidad
//        $producto = Product::find($productoViaje->product_id);
//        $producto->stock = $producto->stock - $productoViaje->cantidad;
//        $producto->save();
//        return $productoViaje;
        $descarga = Descarga::find($id);
        $descarga->status = 'INACTIVO';
        $descarga->save();
        $productos = ProductoViaje::where('descarga_id', $id)->get();

        foreach ($productos as $producto){
            $productoUpdate = Product::find($producto->product_id);
            $productoUpdate->stock = $productoUpdate->stock - $producto->cantidad;
            $productoUpdate->save();
//            error(json_encode($producto));
        }
        return $descarga;
    }
    public function productAdd(Request $request){
        try {
//            error(json_encode($request->all()));
            DB::beginTransaction();
            $user = $request->user();
            $descarga=$request->descarga;
//            error(json_encode($descarga));
//            error($descarga['viaje_id']);
            $products = $request->products;
            $descargaNew = new Descarga();
            $descargaNew->user_id = $user->id;
            $descargaNew->viaje_id = $descarga['viaje_id'];
            $descargaNew->descarga = $descarga['descarga'];
            $descargaNew->dia = $descarga['dia'];
            $descargaNew->fecha = $descarga['fecha'];
            $descargaNew->save();
            foreach ($products as $product){
                $productoViaje = new ProductoViaje();
                $productoViaje->viaje_id = $descarga['viaje_id'];
                $productoViaje->product_id = $product['id'];
                $productoViaje->cantidad = $product['stock'];
                $productoViaje->user_id = $user->id;
                $productoViaje->fecha = now();
                $productoViaje->descarga_id = $descargaNew->id;
                $productoViaje->save();
                //aumentar en producto la cantidad
                $producto = Product::find($product['id']);
                $producto->stock = $producto->stock + $product['stock'];
                $producto->save();
            }
            DB::commit();
            return response()->json(['message' => 'Producto agregado correctamente'], 200);
        }catch (\Exception $e){
            DB::rollBack();
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
    public function index(Request $request){
        $user = $request->user();
//        error(json_encode($user));
//        if ($user->role == 'PATRON') {
//            if ($user->bote_id) {
//                $viajes = Viaje::with(['boat', 'crews'])
//                    ->where('estado', 'Activo')
//                    ->where('boat_id', $user->bote_id)
//                    ->orderBy('id', 'desc')
//                    ->get();
//            }elseif ($user->company_id) {
//                $viajes = Viaje::with(['boat','crews'])
//                    ->where('estado', 'Activo')
//                    ->whereHas('boat', function($query) use ($user){
//                        $query->where('company_id', $user->company_id);
//                    })
//                    ->orderBy('id', 'desc')
//                    ->get();
//            }else{
//                $viajes = [];
//            }
//        }else{
//            $fechaInicio = $request->input('fechaInicio');
//            $fechaFin = $request->input('fechaFin');
//            $viajes = Viaje::where('fechaInicio', '>=', $fechaInicio)
//                ->where('fechaInicio', '<=', $fechaFin)
//                ->with(['boat','crews'])
//                ->orderBy('id', 'desc')
//                ->get();
//        }
//        return $viajes;
        if ($user->id == 1) {
//            viajes cerrados
            $viajes = Viaje::with(['boat','crews'])
                ->orderBy('id', 'desc')
                ->where('estado', 'Cerrado')
                ->get();
        }else{
            $viajes = Viaje::with(['boat','crews'])
                ->where('company_id', $user->company_id)
                ->orderBy('id', 'desc')
                ->where('estado', 'Cerrado')
                ->get();
        }
        return $viajes;
    }
    public function show($id){
        $viaje= Viaje::with(['boat'])->find($id);
        $productoViaje = Descarga::where('viaje_id', $id)
            ->with('user')
            ->with('viaje')
            ->with('productos')
            ->get();
        if (!$viaje) {
            return response()->json(['error' => 'Viaje no encontrado'], 404);
        }
        if (!$viaje->observaciones) {
            $viaje->observaciones = '';
        }
        $lances = $viaje->lances;
        return ['viaje' => $viaje, 'productoViaje' => $productoViaje, 'lances' => $lances];
    }
    public function store(Request $request){
        try {
            DB::beginTransaction();
            //        protected $fillable = ['fechaInicio', 'fechaFin', 'boats_id'];

            $boat = Boat::find($request->input('boat_id'));
            $viaje = new Viaje();
            $viaje->fechaInicio = $request->input('fechaInicio');
            $viaje->fechaFin = $request->input('fechaFin');
            $viaje->boat_id = $request->input('boat_id');
            $viaje->hora = $request->input('hora');
            $viaje->dias = $request->input('dias');
            $viaje->zarpe = $request->input('zarpe');
            $viaje->puertoSalida = $request->input('puertoSalida');
            $viaje->puertoLlegada = $request->input('puertoLlegada');
            $viaje->bandera = $request->input('bandera');
            $viaje->propietario = $request->input('propietario');
            $viaje->company_id = $boat->company_id;
//        $viaje->observaciones = $request->input('observaciones');
            $viaje->save();
            $crews = $request->input('crews');
            foreach ($crews as $crew){
                if ($crew['crew_id'] != null && $crew['crew_id'] != ''){
                    $viaje->crews()->attach($crew['crew_id'], ['role' => $crew['cargo']]);
                }
            }
            DB::commit();
            return Viaje::with('boat','crews')->find($viaje->id);
        }catch (\Exception $e){
            DB::rollBack();
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
    public function update(Request $request, $id){
        $viaje = Viaje::find($id);
        $viaje->fechaInicio = $request->input('fechaInicio');
        $viaje->fechaFin = $request->input('fechaFin');
        $viaje->boat_id = $request->input('boat_id');
        $viaje->hora = $request->input('hora');
        $viaje->dias = $request->input('dias');
        $viaje->zarpe = $request->input('zarpe');
        $viaje->puertoSalida = $request->input('puertoSalida');
        $viaje->puertoLlegada = $request->input('puertoLlegada');
        $viaje->bandera = $request->input('bandera');
        $viaje->propietario = $request->input('propietario');
//        $viaje->observaciones = $request->input('observaciones');
        $viaje->save();
        $crews = $request->input('crews');
        $viaje->crews()->detach();
        foreach ($crews as $crew){
            $viaje->crews()->attach($crew['crew_id'], ['role' => $crew['cargo']]);
        }
        return Viaje::with(['boat','crews'])->find($viaje->id);
    }
    public function updateObservaciones(Request $request, $id){
        $viaje = Viaje::find($id);
        $viaje->observaciones = $request->input('observaciones');
        $viaje->save();
        return Viaje::with('boat')->find($viaje->id);
    }
    public function destroy($id){
        $viaje = Viaje::find($id);
        $viaje->delete();
        return $viaje;
    }
    public function close($id){
        $viaje = Viaje::find($id);
        $viaje->estado = 'Cerrado';
        $viaje->save();
        return Viaje::with('boat')->find($viaje->id);
    }
    public function listaTripulantes($id){
        $viaje = Viaje::find($id);
//        $tripulantes = $viaje->boat->crews;
        $data = [
            'viaje' => $viaje,
            'tripulantes' => $viaje->crews
        ];
        error(json_encode($data));
//        $pdf = App::make('dompdf.wrapper');
//        $pdf->loadView('pdf.tripulantes', $data);
        $pdf = Pdf::loadView('pdf.tripulantes', $data);
        return $pdf->stream();
    }
}
