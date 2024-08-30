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
        $request->merge(['user_id' => $request->user()->id]);
        $lance = Lance::create($request->all());
        return Lance::where('id', $lance->id)->with('user')->first();
    }
    function destroy($id){
        $lance = Lance::find($id);
        $lance->delete();
        return response()->json($lance);
    }
}
