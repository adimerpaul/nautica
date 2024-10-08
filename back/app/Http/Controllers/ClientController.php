<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller{
    function searchClient( Request $request,$nit){
        $user = $request->user();
        if ($user->id == 1) {
            return Client::where('nit',$nit)->first();
        }else{
            return Client::where('nit',$nit)->where('company_id',$user->company_id)->first();
        }
//        return Client::where('nit',$nit)->first();
    }
    public function proveedores(Request $request){
        $user = $request->user();
        if ($user->id == 1) {
            return Client::where('tipo','PROVEEDOR')->get();
        }else{
            return Client::where('tipo','PROVEEDOR')->where('company_id',$user->company_id)->get();
        }
    }
    public function index(Request $request){
        $user = $request->user();
        if ($user->id == 1) {
            return Client::orderBy('id', 'desc')->get();
        }else{
            return Client::where('company_id',$user->company_id)->orderBy('id', 'desc')->get();
        }
//        return Client::orderBy('id', 'desc')->get();
    }
    function clientsCliente(Request $request){
//        return Client::where('tipo','CLIENTE')->get();
        $user = $request->user();
        if ($user->id == 1) {
            return Client::where('tipo','CLIENTE')->get();
        }else{
            return Client::where('tipo','CLIENTE')->where('company_id',$user->company_id)->get();
        }
    }

    public function store(Request $request){
        $user = $request->user();
        $client = new Client();
        $client->name = $request->name;
        $client->lastname = $request->lastname;
        $client->company = $request->company;
        $client->nit = $request->nit;
        $client->phone = $request->phone;
        $client->tipo = $request->tipo;
        $client->company_id = $user->company_id;
        $client->save();
        return response()->json($client);
    }

    public function update(Request $request, $id){
        $client = Client::find($id);
        $client->name = $request->name;
        $client->lastname = $request->lastname;
        $client->company = $request->company;
        $client->nit = $request->nit;
        $client->phone = $request->phone;
        $client->tipo = $request->tipo;
        $client->save();
        return response()->json($client);
    }

    public function destroy($id){
       $client = Client::find($id);
       $client->delete();
        return $client;
    }
}
