<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Viaje extends Model
{
    use HasFactory;
    protected $fillable = ['fechaInicio', 'fechaFin', 'boat_id', 'observaciones', 'hora', 'dias', 'zarpe', 'puertoSalida', 'puertoLlegada', 'bandera', 'propietario', 'estado', 'company_id'];
    protected $hidden = ['created_at', 'updated_at'];
    function boat(){
        return $this->belongsTo(Boat::class, 'boat_id')->with('company');
    }
    function products(){
        return $this->belongsToMany(Product::class, 'producto_viajes', 'viaje_id', 'product_id')
            ->withPivot('cantidad', 'fecha', 'status','user_id');
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
    function productos(){
        return $this->hasMany(ProductoViaje::class);
    }
    function descargas(){
        return $this->hasMany(Descarga::class);
    }
    function crews(){
        return $this->belongsToMany(Crew::class, 'crew_viajes', 'viaje_id', 'crew_id')
            ->withPivot('role');
    }
    function lances(){
        return $this->hasMany(Lance::class)->orderBy('id', 'desc')->with('user');
    }
}
