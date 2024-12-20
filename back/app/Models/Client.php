<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['name', 'lastname', 'company', 'nit', 'phone', 'tipo','company_id'];
    protected $hidden = ['created_at', 'updated_at'];
}
