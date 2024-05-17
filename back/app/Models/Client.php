<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'lastname', 'company', 'nit', 'phone'];
    protected $hidden = ['created_at', 'updated_at'];
}
