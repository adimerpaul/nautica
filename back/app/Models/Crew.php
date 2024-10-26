<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Crew extends Model{
    use HasFactory, SoftDeletes;
    protected $fillable = ['name', 'role', 'boat_id', 'nacionalidad', 'tipoDocumento', 'numeroIdentificacion', 'telefono', 'company_id', 'estado'];
    public function boat(){
        return $this->belongsTo(Boat::class);
    }
    protected $hidden = ['created_at', 'updated_at'];
}
