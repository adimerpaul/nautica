<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sale extends Model{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'date',
        'client_id',
        'total',
        'tipo',
        'user_id',
        'observacion',
        'pago',
        'description',
        'tipo_venta',
        'numeroFactura',
        'motivo_anulacion',
        'viaje_id',
        'boat_id',
        'company_id',
    ];
    protected $hidden = ['created_at', 'updated_at'];
    public function client(){
        return $this->belongsTo(Client::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function details(){
        return $this->hasMany(Detail::class);
    }
    public function payments(){
        return $this->hasMany(Payment::class);
    }
    function viaje(){
        return $this->belongsTo(Viaje::class);
    }
    function boat(){
        return $this->belongsTo(Boat::class);
    }
    function company(){
        return $this->belongsTo(Company::class);
    }
//$pago=0;
//foreach ($sale->payments as $payment){
//$pago += $payment->amount;
//}
//$sale->pago = $pago;
//$debt = $sale->total - $pago;
//$sale->debt = $sale->total - $pago;
    protected $appends = ['debt','pago'];
    function getDebtAttribute(){
        $pago=0;
        if ($this->tipo == 'CONTADO'){
            return 0;
        }

        foreach ($this->payments as $payment){
            $pago += $payment->amount;
        }
        return $this->total - $pago;
    }
    function getPagoAttribute(){
        $pago=0;
        foreach ($this->payments as $payment){
            $pago += $payment->amount;
        }
        return $pago;
    }
}
