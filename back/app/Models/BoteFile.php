<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BoteFile extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['documento', 'file', 'anio', 'fecha', 'boat_id'];
    protected $hidden=['created_at', 'updated_at', 'deleted_at'];
    public function boat(){
        return $this->belongsTo(Boat::class);
    }
}
