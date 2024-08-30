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
        'viaje_id',
        'user_id'
    ];
    protected $hidden = [
        'created_at',
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

}
