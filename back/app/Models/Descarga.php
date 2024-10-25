<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Descarga extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['user_id', 'viaje_id', 'descarga', 'dia', 'fecha', 'status'];
    protected $appends = ['details'];
    public function getDetailsAttribute(){
        //cantidad con nam producto y una coma
        $productos = ProductoViaje::where('descarga_id', $this->id)->get();
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
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function viaje(){
        return $this->belongsTo(Viaje::class);
    }
    public function productos(){
        return $this->hasMany(ProductoViaje::class);
    }

    protected $hidden = ['created_at', 'updated_at'];
}
