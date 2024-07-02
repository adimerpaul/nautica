<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Crew extends Model{
    use HasFactory;
    protected $fillable = ['name', 'role', 'boat_id', 'nacionalidad', 'tipoDocumento', 'numeroIdentificacion', 'telefono'];
    public function boat(){
        return $this->belongsTo(Boat::class);
    }
    protected $hidden = ['created_at', 'updated_at'];
}
