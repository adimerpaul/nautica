<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LanceViaje extends Model
{
    use HasFactory;
    protected $fillable = [
        'fecha',
        'numero',
        'hora_inicio',
        'hora_fin',
        'latitud',
        'longitud',
        'camaron_blanco',
        'camaron_cafe',
        'camaron_rojo',
        'camaroncillo',
        'calamar',
        'caracol',
        'corvina',
        'babosa',
        'guabina',
        'jaiba',
        'langosta',
        'pulpo',
        'jurel',
        'anguila',
        'pargo',
        'robalo',
        'cienero',
        'otras_especies',
        'observaciones',
        'viaje_id',
        'user_id',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
    function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
    function viaje(){
        return $this->belongsTo(Viaje::class, 'viaje_id');
    }

}
