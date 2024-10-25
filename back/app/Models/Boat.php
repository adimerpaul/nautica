<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Boat extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'name',
        'company_id',
        'color',
        'dif',
        'autoridad',
        'licencia',
        'dif_fecha',
        'autoridad_fecha',
        'licencia_fecha',
    ];
    public function company(){
        return $this->belongsTo(Company::class);
    }
    public function crews(){
        return $this->hasMany(Crew::class);
    }
    public function files(){
        return $this->hasMany(BoteFile::class);
    }
    protected $hidden = ['created_at', 'updated_at'];
}
