<?php

namespace App\Http\Controllers;

use App\Models\Lance;
use Illuminate\Http\Request;

class LanceController extends Controller{
    function index(Request $request){
        $lances = Lance::where('viaje_id', $request->viaje_id)->with('user')->get();
        return response()->json($lances);
    }
    function store(Request $request){
//        $request->merge(['user_id' => $request->user()->id]);
        $lanceRequest = $request->lance;
        $lanceRequest['user_id'] = $request->user()->id;
        $lance = Lance::create($lanceRequest);
        $productos = $request->products;
        foreach($productos as $producto){
            $lance->productos()->create([
                'cantidad' => $producto['stock'],
                'product_id' => $producto['id']
            ]);
        }
        return Lance::where('id', $lance->id)->with('user')->first();
    }
    function destroy($id){
        $lance = Lance::find($id);
        $lance->delete();
        return response()->json($lance);
    }
    function anularLance($id){
        $lance = Lance::find($id);
        $lance->status = 'INACTIVO';
        $lance->save();
        return response()->json($lance);
    }
//    append
}
