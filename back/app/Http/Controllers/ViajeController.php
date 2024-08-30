<?php

namespace App\Http\Controllers;

use App\Models\Descarga;
use App\Models\Product;
use App\Models\ProductoViaje;
use App\Models\Viaje;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use function Laravel\Prompts\error;

class ViajeController extends Controller{
    function viajesConciliacion($id){
        $viaje = Viaje::with(['boat','productos.product'])->find($id);
        $productos = Product::all();

        foreach ($productos as $producto){
            $producto->descargas = Descarga::where('viaje_id', $id)
                ->where('status', 'ACTIVO')
                ->with('productos')
                ->whereHas('productos', function($query) use ($producto){
                    $query->where('product_id', $producto->id);
                })
                ->get();
        }

        return [
            'viaje' => $viaje,
            'productos' => $viaje->productos
        ];
    }
    function viajesActivos(Request $request){
        $fechaInicio = $request->input('fechaInicio');
        $fechaFin = $request->input('fechaFin');
        $viajes = Viaje::where('fechaInicio', '>=', $fechaInicio)
            ->where('fechaInicio', '<=', $fechaFin)
            ->where('estado', 'Activo')
            ->with(['boat','crews'])
            ->orderBy('id', 'desc')
            ->get();
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
        $fechaInicio = $request->input('fechaInicio');
        $fechaFin = $request->input('fechaFin');
        $viajes = Viaje::where('fechaInicio', '>=', $fechaInicio)
            ->where('fechaInicio', '<=', $fechaFin)
            ->with(['boat','crews'])
            ->orderBy('id', 'desc')
            ->get();
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
//        protected $fillable = ['fechaInicio', 'fechaFin', 'boats_id'];
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
//        $viaje->observaciones = $request->input('observaciones');
        $viaje->save();
        $crews = $request->input('crews');
        foreach ($crews as $crew){
            $viaje->crews()->attach($crew['crew_id'], ['role' => $crew['cargo']]);
        }
        return Viaje::with('boat')->find($viaje->id);
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
