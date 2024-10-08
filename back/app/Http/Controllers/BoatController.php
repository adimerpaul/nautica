<?php

namespace App\Http\Controllers;

use App\Models\Boat;
use App\Models\BoteFile;
use App\Models\Company;
use Illuminate\Http\Request;

class BoatController extends Controller{
    function boatsFile2(Request $request,$id){
//        const formData = new FormData()
//      formData.append('documento', this.file.documento)
//      formData.append('anio', this.file.anio)
//      formData.append('fecha_vencimiento', this.file.fecha_vencimiento)
//      formData.append('archivo', this.file.archivo)
//      this.$axios.post(`boatsFile/${this.boat.id}`, formData).then(response => {
//            this.boat = response.data
//        this.dialog = false
//        this.boatsGet()
//      })
        $validatedData = $request->validate([
            'archivo' => 'required',
        ]);

        $file = $request->file('archivo');
        $name = time().$file->getClientOriginalName();
        $file->move(public_path().'/files/', $name);
        $boteFile = BoteFile::create([
            'boat_id' => $id,
            'documento' => $request->documento,
            'anio' => $request->anio,
            'fecha' => $request->fecha_vencimiento,
            'file' => $name,
        ]);

    }
    public function index(Request $request){
        $user = $request->user();
        if($user->id == 1){
            return Boat::orderBy('id', 'desc')->with('company')->get();
        }else{
            return Boat::where('company_id', $user->company_id)->orderBy('id', 'desc')->with('company')->get();
        }
//        return Boat::orderBy('id', 'desc')->with('company')->get();
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
        return Boat::where('id', $id)->with('company','files')->first();
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
