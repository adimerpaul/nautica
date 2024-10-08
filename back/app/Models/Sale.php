<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model{
    use HasFactory;
    protected $fillable = [
        'date',
        'client_id',
        'total',
        'tipo',
        'user_id',
        'observacion',
        'pago',
        'description',
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
}
