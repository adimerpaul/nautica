<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $fillable = ['sale_id', 'user_id', 'amount', 'date', 'status'];
    protected $hidden = ['created_at', 'updated_at'];
    public function sale(){
        return $this->belongsTo(Sale::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
