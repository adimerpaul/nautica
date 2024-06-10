<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductoViaje extends Model
{
    use HasFactory;
    protected $fillable = ['product_id', 'viaje_id', 'cantidad', 'fecha', 'status'];
    protected $hidden = ['created_at', 'updated_at'];
    function product(){
        return $this->belongsTo(Product::class, 'product_id');
    }
    function viaje(){
        return $this->belongsTo(Viaje::class, 'viaje_id');
    }
}
