<?php

namespace App\Http\Controllers;

use App\Models\Detail;
use App\Models\Product;
use App\Models\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller{
    public function store(Request $request){
        $user_id = $request->user()->id;
        $sale = new Sale();
        $sale->date = date('Y-m-d H:i:s');
        $sale->client_id = $request->client_id;
        $sale->total = 0;
        $sale->tipo = $request->tipo;
        $sale->user_id = $user_id;
        $sale->observacion = $request->observacion;
        $sale->pago = $request->pago;
        $sale->save();
        $products = $request->products;
        foreach ($products as $product){
            $details = new Detail();
            $details->sale_id = $sale->id;
            $details->product_id = $product['id'];
            $details->user_id = $user_id;
            $details->product_name = $product['name'];
            $details->quantity = $product['quantity'];
            $details->price = $product['price'];
            $details->total = $product['quantity'] * $product['price'];
            $details->save();
            $sale->total += $details->total;

            // Update stock
            $productFind = Product::find($product['id']);
            $productFind->stock -= $product['quantity'];
            $productFind->save();
        }
        $sale->save();
        return Sale::with('client', 'user', 'details')->where('id', $sale->id)->first();
    }
}
