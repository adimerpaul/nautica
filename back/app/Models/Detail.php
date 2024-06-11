<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    use HasFactory;
    protected $fillable = ['sale_id', 'product_id','user_id', 'product_name', 'quantity', 'price', 'total'];
    protected $hidden = ['created_at', 'updated_at'];
    public function sale(){
        return $this->belongsTo(Sale::class);
    }
    public function product(){
        return $this->belongsTo(Product::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
