<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller{
    function store(Request $request){
        $payment = new Payment();
//        protected $fillable = ['sale_id', 'user_id', 'amount', 'date', 'status'];
        $payment->sale_id = $request->sale_id;
        $payment->user_id = $request->user()->id;
        $payment->amount = $request->amount;
        $payment->date = date('Y-m-d H:i:s');
        $payment->save();
        return $payment;
    }

    function anularPago($id){
        $payment = Payment::find($id);
        $payment->status = 'ANULADO';
        $payment->save();
        return $payment;
    }
}
