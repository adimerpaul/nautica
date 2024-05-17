<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller{
    public function index(){
        return Company::orderBy('id', 'desc')->get();
    }
    public function store(Request $request){
        $validatedData = $request->validate([
            'name' => 'required',
            'address' => 'required',
            'phone' => 'required',
        ]);
        $company = new Company();
        $company->name = $request->name;
        $company->address = $request->address;
        $company->phone = $request->phone;
        $company->save();
        return $company;
    }
    public function update(Request $request, $id){
        $company = Company::find($id);
        $company->name = $request->name;
        $company->address = $request->address;
        $company->phone = $request->phone;
        $company->save();
        return $company;
    }
    public function destroy($id){
        $company = Company::find($id);
        $company->delete();
        return $company;
    }
}
