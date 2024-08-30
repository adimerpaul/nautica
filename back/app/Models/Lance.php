<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lance extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'fecha',
        'numero',
        'hora_inicio',
        'hora_fin',
        'latitud',
        'longitud',
        'status',
        'observaciones',
        'viaje_id',
        'user_id'
    ];
    protected $hidden = [
        'updated_at',
        'deleted_at'
    ];
    function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
    function viaje(){
        return $this->belongsTo(Viaje::class, 'viaje_id');
    }
    function productos(){
        return $this->hasMany(LanceProducto::class, 'lance_id');
    }
    protected $appends=['details'];
    public function getDetailsAttribute(){
        $productos = LanceProducto::where('lance_id', $this->id)->get();
        $this->cantidad = 0;
        $res = '';
        foreach ($productos as $producto) {
            $this->cantidad += isset($producto->cantidad) ? $producto->cantidad : 0;
            $res .= isset($producto->cantidad) ? $producto->cantidad.' ' : '0 '; // Agregar cantidad o '0' si es null
            $res .= isset($producto->product->name) ? $producto->product->name : 'Nombre no disponible'; // Agregar nombre del producto o indicar que no está disponible
            $res .= ', ';
        }
        $res = substr($res, 0, -2);
        return $res;
    }
}
