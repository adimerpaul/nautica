<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
//        Boat.php
//BoteFile.php
//Category.php
//Client.php
//Company.php
//Crew.php
//CrewViaje.php
//Descarga.php
//Detail.php
//Lance.php
//LanceProducto.php
//        lance_viajes
//Payment.php
//Product.php
//ProductoViaje.php
//Sale.php
//User.php
//Viaje.php
        Schema::table('boats', function (Blueprint $table) {
            $table->softDeletes();
        });
//        Schema::table('bote_files', function (Blueprint $table) {
//            $table->softDeletes();
//        });
        Schema::table('categories', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('clients', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('companies', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('crews', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('crew_viajes', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('descargas', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('details', function (Blueprint $table) {
            $table->softDeletes();
        });
//        Schema::table('lances', function (Blueprint $table) {
//            $table->softDeletes();
//        });
//        Schema::table('lance_productos', function (Blueprint $table) {
//            $table->softDeletes();
//        });
        Schema::table('payments', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('products', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('producto_viajes', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('sales', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('users', function (Blueprint $table) {
            $table->softDeletes();
        });
        Schema::table('viajes', function (Blueprint $table) {
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('boats', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
//        Schema::table('bote_files', function (Blueprint $table) {
//            $table->dropSoftDeletes();
//        });
        Schema::table('categories', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
        Schema::table('clients', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
        Schema::table('companies', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
        Schema::table('crews', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
        Schema::table('crew_viajes', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
        Schema::table('descargas', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
        Schema::table('details', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
//        Schema::table('lances', function (Blueprint $table) {
//            $table->dropSoftDeletes();
//        });
//        Schema::table('lance_productos', function (Blueprint $table) {
//            $table->dropSoftDeletes();
//        });
        Schema::table('payments', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
        Schema::table('products', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
        Schema::table('producto_viajes', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
        Schema::table('sales', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
        Schema::table('users', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
        Schema::table('viajes', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
};
