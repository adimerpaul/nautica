<?php

namespace App\Http\Controllers;

use App\Models\Viaje;
use Illuminate\Http\Request;

class ViajeController extends Controller{
    public function index(Request $request){
        $fechaInicio = $request->input('fechaInicio');
        $fechaFin = $request->input('fechaFin');
        $viajes = Viaje::where('fechaInicio', '>=', $fechaInicio)
            ->where('fechaFin', '<=', $fechaFin)
            ->orderBy('fechaInicio', 'desc')
            ->get();
        return $viajes;
    }
    public function store(Request $request){
//        protected $fillable = ['fechaInicio', 'fechaFin', 'boats_id'];
        $viaje = new Viaje();
        $viaje->fechaInicio = $request->input('fechaInicio');
        $viaje->fechaFin = $request->input('fechaFin');
        $viaje->boat_id = $request->input('boat_id');
        $viaje->save();
    }
}
