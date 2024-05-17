<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;


Route::post('/login', [\App\Http\Controllers\UserController::class, 'login']);

Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::get('/me', [\App\Http\Controllers\UserController::class, 'me']);
    Route::post('/logout', [\App\Http\Controllers\UserController::class, 'logout']);

    Route::get('/users', [\App\Http\Controllers\UserController::class, 'index']);
    Route::post('/users', [\App\Http\Controllers\UserController::class, 'store']);
    Route::put('/users/{id}', [\App\Http\Controllers\UserController::class, 'update']);
    Route::delete('/users/{id}', [\App\Http\Controllers\UserController::class, 'delete']);
    Route::put('/passwordUpdate/{id}', [\App\Http\Controllers\UserController::class, 'passwordUpdate']);

    Route::get('/companies', [\App\Http\Controllers\CompanyController::class, 'index']);
    Route::post('/companies', [\App\Http\Controllers\CompanyController::class, 'store']);
    Route::put('/companies/{id}', [\App\Http\Controllers\CompanyController::class, 'update']);
    Route::delete('/companies/{id}', [\App\Http\Controllers\CompanyController::class, 'destroy']);

    Route::get('/boats', [\App\Http\Controllers\BoatController::class, 'index']);
    Route::post('/boats', [\App\Http\Controllers\BoatController::class, 'store']);
    Route::put('/boats/{id}', [\App\Http\Controllers\BoatController::class, 'update']);
    Route::delete('/boats/{id}', [\App\Http\Controllers\BoatController::class, 'destroy']);

    Route::get('/crews', [\App\Http\Controllers\CrewController::class, 'index']);
    Route::post('/crews', [\App\Http\Controllers\CrewController::class, 'store']);
    Route::put('/crews/{id}', [\App\Http\Controllers\CrewController::class, 'update']);
    Route::delete('/crews/{id}', [\App\Http\Controllers\CrewController::class, 'destroy']);
});

Route::get('/compromiso/{loan_id}', [\App\Http\Controllers\ReportController::class, 'compromiso']);
