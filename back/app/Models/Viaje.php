<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Viaje extends Model
{
    use HasFactory;
    protected $fillable = ['fechaInicio', 'fechaFin', 'boat_id'];
    protected $hidden = ['created_at', 'updated_at'];
    function boat(){
        return $this->belongsTo(Boat::class, 'boat_id')->with('company');
    }
    function products(){
        return $this->belongsToMany(Product::class, 'producto_viajes', 'viaje_id', 'product_id')
            ->withPivot('cantidad', 'fecha', 'status');
    }
    protected $appends = ['status'];
    function getStatusAttribute(){
        if($this->fechaFin < now()){
            return 'Finalizado';
        }else if($this->fechaInicio > now()){
            return 'Pendiente';
        }else{
            return 'En curso';
        }
    }
}
