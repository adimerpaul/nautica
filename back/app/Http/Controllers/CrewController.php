<?php

namespace App\Http\Controllers;

use App\Models\Crew;
use Illuminate\Http\Request;

class CrewController extends Controller{
    public function index(Request $request){
        $user = $request->user();
        if ($user->id == 1) {
            return Crew::orderBy('id', 'desc')->with('boat')->get();
        } else {
            return Crew::where('company_id', $user->company_id)->orderBy('id', 'desc')->with('boat')->get();
        }
//        return Crew::orderBy('id', 'desc')->with('boat')->get();
    }
    public function store(Request $request){
        $user = $request->user();
        $validatedData = $request->validate([
            'name' => 'required',
            'role' => 'required',
            'boat_id' => 'required',
        ]);
        $crew = new Crew();
        $crew->name = $request->name;
        $crew->role = $request->role;
        $crew->boat_id = $request->boat_id;
        $crew->nacionalidad = $request->nacionalidad;
        $crew->tipoDocumento = $request->tipoDocumento;
        $crew->numeroIdentificacion = $request->numeroIdentificacion;
        $crew->telefono = $request->telefono;
        $crew->company_id = $user->company_id;
        $crew->save();
        return Crew::where('id', $crew->id)->with('boat')->first();
    }
    public function update(Request $request, $id){
        $crew = Crew::find($id);
        $crew->name = $request->name;
        $crew->role = $request->role;
        $crew->boat_id = $request->boat_id;
        $crew->nacionalidad = $request->nacionalidad;
        $crew->tipoDocumento = $request->tipoDocumento;
        $crew->numeroIdentificacion = $request->numeroIdentificacion;
        $crew->telefono = $request->telefono;
        $crew->estado = $request->estado;
        $crew->save();
        return Crew::where('id', $crew->id)->with('boat')->first();
    }
    public function destroy($id){
        $crew = Crew::find($id);
        $crew->delete();
        return $crew;
    }
}
