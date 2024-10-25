<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CrewViaje extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['crew_id', 'viaje_id', 'role'];
    protected $hidden = ['created_at', 'updated_at'];
}
