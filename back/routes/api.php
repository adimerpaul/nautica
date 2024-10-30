<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;


Route::post('/login', [\App\Http\Controllers\UserController::class, 'login']);

Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::get('/me', [\App\Http\Controllers\UserController::class, 'me']);
    Route::post('/logout', [\App\Http\Controllers\UserController::class, 'logout']);

    Route::get('/users', [\App\Http\Controllers\UserController::class, 'index']);
    Route::get('/roles', [\App\Http\Controllers\UserController::class, 'roles']);
    Route::put('/permissionsRole/{id}', [\App\Http\Controllers\UserController::class, 'permissionsRole']);
    Route::post('/users', [\App\Http\Controllers\UserController::class, 'store']);
    Route::put('/users/{id}', [\App\Http\Controllers\UserController::class, 'update']);
    Route::delete('/users/{id}', [\App\Http\Controllers\UserController::class, 'delete']);
    Route::put('/passwordUpdate/{id}', [\App\Http\Controllers\UserController::class, 'passwordUpdate']);
    Route::get('/permissions', [\App\Http\Controllers\UserController::class, 'permissions']);
    Route::put('/permissions/{id}', [\App\Http\Controllers\UserController::class, 'updatePermissions']);

    Route::get('/companies', [\App\Http\Controllers\CompanyController::class, 'index']);
    Route::post('/companies', [\App\Http\Controllers\CompanyController::class, 'store']);
    Route::put('/companies/{id}', [\App\Http\Controllers\CompanyController::class, 'update']);
    Route::delete('/companies/{id}', [\App\Http\Controllers\CompanyController::class, 'destroy']);

    Route::get('/boats', [\App\Http\Controllers\BoatController::class, 'index']);
    Route::get('/boats/{id}', [\App\Http\Controllers\BoatController::class, 'show']);
    Route::post('/boats', [\App\Http\Controllers\BoatController::class, 'store']);
    Route::post('/boatsFile/{boat}', [\App\Http\Controllers\BoatController::class, 'boatsFile']);
    Route::delete('/boatsFile/{id}', [\App\Http\Controllers\BoatController::class, 'boatsFileDelete']);
    Route::put('/boats/{id}', [\App\Http\Controllers\BoatController::class, 'update']);
    Route::delete('/boats/{id}', [\App\Http\Controllers\BoatController::class, 'destroy']);
    Route::get('/botesPorVencer', [\App\Http\Controllers\BoatController::class, 'botesPorVencer']);

    Route::post('/boatsFile2/{id}', [\App\Http\Controllers\BoatController::class, 'boatsFile2']);
    Route::put('/boatsFile/{id}', [\App\Http\Controllers\BoatController::class, 'boatsUpdate']);

    Route::get('/crews', [\App\Http\Controllers\CrewController::class, 'index']);
    Route::post('/crews', [\App\Http\Controllers\CrewController::class, 'store']);
    Route::put('/crews/{id}', [\App\Http\Controllers\CrewController::class, 'update']);
    Route::delete('/crews/{id}', [\App\Http\Controllers\CrewController::class, 'destroy']);
//    crewsActive
    Route::get('/crewsActive', [\App\Http\Controllers\CrewController::class, 'crewsActive']);

    Route::get('/clients', [\App\Http\Controllers\ClientController::class, 'index']);
    Route::get('/searchClient/{nit}', [\App\Http\Controllers\ClientController::class, 'searchClient']);
    Route::get('/clientsCliente', [\App\Http\Controllers\ClientController::class, 'clientsCliente']);
    Route::post('/clients', [\App\Http\Controllers\ClientController::class, 'store']);
    Route::put('/clients/{id}', [\App\Http\Controllers\ClientController::class, 'update']);
    Route::delete('/clients/{id}', [\App\Http\Controllers\ClientController::class, 'destroy']);
    Route::get('/proveedores', [\App\Http\Controllers\ClientController::class, 'proveedores']);

    Route::get('/products', [\App\Http\Controllers\ProductController::class, 'index']);
//    productsActivos
    Route::get('/productsActivos', [\App\Http\Controllers\ProductController::class, 'productsActivos']);
    Route::post('/products', [\App\Http\Controllers\ProductController::class, 'store']);
    Route::post('/products/{id}', [\App\Http\Controllers\ProductController::class, 'update']);
    Route::delete('/products/{id}', [\App\Http\Controllers\ProductController::class, 'destroy']);

    Route::get('/categories', [\App\Http\Controllers\CategoryController::class, 'index']);
    Route::post('/categories', [\App\Http\Controllers\CategoryController::class, 'store']);
    Route::put('/categories/{id}', [\App\Http\Controllers\CategoryController::class, 'update']);
    Route::delete('/categories/{id}', [\App\Http\Controllers\CategoryController::class, 'destroy']);

    Route::get('/viajes', [\App\Http\Controllers\ViajeController::class, 'index']);
    Route::get('/viajesConciliacion/{id}', [\App\Http\Controllers\ViajeController::class, 'viajesConciliacion']);
    Route::get('/viajesActivos', [\App\Http\Controllers\ViajeController::class, 'viajesActivos']);
    Route::get('/viajes/{id}', [\App\Http\Controllers\ViajeController::class, 'show']);
    Route::post('/viajes', [\App\Http\Controllers\ViajeController::class, 'store']);
    Route::put('/viajes/{id}', [\App\Http\Controllers\ViajeController::class, 'update']);
    Route::delete('/viajes/{id}', [\App\Http\Controllers\ViajeController::class, 'destroy']);
    Route::put('/viajes/{id}/close', [\App\Http\Controllers\ViajeController::class, 'close']);

    Route::put('/updateObservaciones/{id}', [\App\Http\Controllers\ViajeController::class, 'updateObservaciones']);
    Route::post('/productAdd', [\App\Http\Controllers\ViajeController::class, 'productAdd']);
    Route::put('/productAnular/{id}', [\App\Http\Controllers\ViajeController::class, 'productAnular']);

    Route::get('/sales', [\App\Http\Controllers\SaleController::class, 'index']);
    Route::post('/sales', [\App\Http\Controllers\SaleController::class, 'store']);
    Route::get('/debtors', [\App\Http\Controllers\SaleController::class, 'debtors']);
    Route::post('registrarGasto', [\App\Http\Controllers\SaleController::class, 'registrarGasto']);
    Route::post('saleAnular', [\App\Http\Controllers\SaleController::class, 'saleAnular']);
    Route::get('/salesGastos', [\App\Http\Controllers\SaleController::class, 'salesGastos']);

    Route::post('/payments', [\App\Http\Controllers\PaymentController::class, 'store']);
    Route::post('/anularPago/{id}', [\App\Http\Controllers\PaymentController::class, 'anularPago']);
    Route::get('/listaTripulantes/{id}', [\App\Http\Controllers\ViajeController::class, 'listaTripulantes']);
    Route::get('/exportSalesExcel', [\App\Http\Controllers\ExcelController::class, 'exportSalesExcel']);
    Route::get('/exportSalesPdf', [\App\Http\Controllers\ExcelController::class, 'exportSalesPdf']);

    Route::get('/exportDescargarPdf/{id}', [\App\Http\Controllers\ExcelController::class, 'exportDescargarPdf']);



    Route::get('/lances', [\App\Http\Controllers\LanceController::class, 'index']);
    Route::post('/lances', [\App\Http\Controllers\LanceController::class, 'store']);
    Route::delete('/lances/{id}', [\App\Http\Controllers\LanceController::class, 'destroy']);
    Route::put('/anularLance/{id}', [\App\Http\Controllers\LanceController::class, 'anularLance']);
//    reporte post
    Route::get('/reporte', [\App\Http\Controllers\ReportController::class, 'reporte']);
});

Route::get('/exportPdfLances/{viaje_id}', [\App\Http\Controllers\ExcelController::class, 'exportPdfLances']);
Route::get('/compromiso/{loan_id}', [\App\Http\Controllers\ReportController::class, 'compromiso']);
Route::get('/exportDescargarPdfTotal/{viaje_id}', [\App\Http\Controllers\ExcelController::class, 'exportDescargarPdfTotal']);
