<?php

namespace App\Http\Controllers;

use App\Models\Boat;
use App\Models\Company;
use Illuminate\Http\Request;

class BoatController extends Controller{
    public function index(){
        return Boat::orderBy('id', 'desc')->with('company')->get();
    }
    function botesPorVencer(){
//        'dif_fecha',
//        'autoridad_fecha',
//        'licencia_fecha',
//        que pregunte 60 dias antes de vencer
        $now = date('Y-m-d');
        $boats = Boat::where('dif_fecha', '<', date('Y-m-d', strtotime($now . ' + 60 days')))
            ->orWhere('autoridad_fecha', '<', date('Y-m-d', strtotime($now . ' + 60 days')))
            ->orWhere('licencia_fecha', '<', date('Y-m-d', strtotime($now . ' + 60 days')))
            ->with('company')
            ->get();
        return $boats;
    }
    public function show($id){
        return Boat::where('id', $id)->with('company')->first();
    }
    public function store(Request $request){
        $validatedData = $request->validate([
            'name' => 'required',
            'company_id' => 'required',
        ]);
        $company = Company::find($request->company_id);
        $boat = new Boat();
        $boat->name = $request->name;
        $boat->company_id = $request->company_id;
        $boat->color = $company->color;
        $boat->save();
        return Boat::where('id', $boat->id)->with('company')->first();
    }
    public function update(Request $request, $id){
        $boat = Boat::find($id);
//        $boat->name = $request->name;
//        $boat->company_id = $request->company_id;
//        $boat->save();
        $boat->update($request->all());
        return Boat::where('id', $boat->id)->with('company')->first();
    }
    public function boatsFile(Request $request,Boat $boat){
        $validatedData = $request->validate([
            'file' => 'required',
        ]);
        $field = $request->field;
        $file = $request->file('file');
        $name = time().$file->getClientOriginalName();
        $file->move(public_path().'/files/', $name);
        $boat->$field = $name;
        $boat->save();
        return Boat::where('id', $boat->id)->with('company')->first();
    }
    public function destroy($id){
        $boat = Boat::find($id);
        $boat->delete();
        return $boat;
    }
}
