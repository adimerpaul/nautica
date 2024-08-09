<?php

namespace App\Http\Controllers;

use App\Models\LanceViaje;
use Illuminate\Http\Request;

class LanceViajeController extends Controller{
    function index(Request $request){
        $lances = LanceViaje::where('viaje_id', $request->viaje_id)->with('user')->get();
        return response()->json($lances);
    }
    function store(Request $request){
        $request->merge(['user_id' => $request->user()->id]);
        $lance = LanceViaje::create($request->all());
        return LanceViaje::where('id', $lance->id)->with('user')->first();
    }
    function destroy($id){
        $lance = LanceViaje::find($id);
        $lance->delete();
        return response()->json($lance);
    }
}
