<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LanceProducto extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'lance_id',
        'product_id',
        'cantidad'
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
    function lance(){
        return $this->belongsTo(Lance::class, 'lance_id');
    }
    function product(){
        return $this->belongsTo(Product::class, 'product_id');
    }
}
