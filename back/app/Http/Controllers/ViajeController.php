<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductoViaje;
use App\Models\Viaje;
use Illuminate\Http\Request;

class ViajeController extends Controller{
    public function productAnular(Request $request, $id){
        $productoViaje = ProductoViaje::find($id);
        $productoViaje->status = 'INACTIVO';
        $productoViaje->save();
        //disminuir en producto la cantidad
        $producto = Product::find($productoViaje->product_id);
        $producto->stock = $producto->stock - $productoViaje->cantidad;
        $producto->save();
        return $productoViaje;
    }
    public function productAdd(Request $request){
        $viaje_id = $request->viaje_id;
        $product_id = $request->product_id;
        $cantidad = $request->cantidad;
        $user_id = $request->user()->id;
//        $viaje = Viaje::find($viaje_id);
//        if (!$viaje) {
//            return response()->json(['error' => 'Viaje no encontrado'], 404);
//        }
//        $viaje->products()->attach($product_id, ['cantidad' => $cantidad, 'user_id' => $user_id, 'fecha' => now()]);
        $productoViaje = new ProductoViaje();
        $productoViaje->viaje_id = $viaje_id;
        $productoViaje->product_id = $product_id;
        $productoViaje->cantidad = $cantidad;
        $productoViaje->user_id = $user_id;
        $productoViaje->fecha = now();
        $productoViaje->save();
        //aumentar en producto la cantidad
        $producto = Product::find($product_id);
        $producto->stock = $producto->stock + $cantidad;
        $producto->save();
        return ProductoViaje::with(['product', 'user'])->where('id', $productoViaje->id)->first();
    }
    public function index(Request $request){
        $fechaInicio = $request->input('fechaInicio');
        $fechaFin = $request->input('fechaFin');
        $viajes = Viaje::where('fechaInicio', '>=', $fechaInicio)
            ->where('fechaInicio', '<=', $fechaFin)
            ->with('boat')
            ->orderBy('id', 'desc')
            ->get();
        return $viajes;
    }
    public function show($id){
        $viaje= Viaje::with(['boat'])->find($id);
        $productoViaje = ProductoViaje::where('viaje_id', $id)->with(['product', 'user'])->orderBy('id', 'desc')->get();
        if (!$viaje) {
            return response()->json(['error' => 'Viaje no encontrado'], 404);
        }
        if (!$viaje->observaciones) {
            $viaje->observaciones = '';
        }
        return ['viaje' => $viaje, 'productoViaje' => $productoViaje];
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
        return Viaje::with('boat')->find($viaje->id);
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
}
