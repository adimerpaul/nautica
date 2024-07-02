<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Descarga extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'viaje_id', 'descarga', 'dia', 'fecha'];
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
