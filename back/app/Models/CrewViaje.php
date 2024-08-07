<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CrewViaje extends Model
{
    use HasFactory;
    protected $fillable = ['crew_id', 'viaje_id', 'role'];
    protected $hidden = ['created_at', 'updated_at'];
}
