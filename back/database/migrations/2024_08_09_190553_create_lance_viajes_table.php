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
        Schema::create('lance_viajes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->foreign('product_id')->references('id')->on('products');
            $table->unsignedBigInteger('viaje_id');
            $table->foreign('viaje_id')->references('id')->on('viajes');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('cantidad');
            $table->dateTime('fecha');
            $table->string('status')->default('ACTIVO');
//            $table->date('fecha')->nullable();
//            $table->integer('numero')->nullable();
//            $table->time('hora_inicio')->nullable();
//            $table->time('hora_fin')->nullable();
//            $table->double('latitud', 8, 6)->nullable();
//            $table->double('longitud', 9, 6)->nullable();
//            $table->double('camaron_blanco', 8, 2)->nullable();
//            $table->double('camaron_cafe', 8, 2)->nullable();
//            $table->double('camaron_rojo', 8, 2)->nullable();
//            $table->double('camaroncillo', 8, 2)->nullable();
//            $table->double('calamar', 8, 2)->nullable();
//            $table->double('caracol', 8, 2)->nullable();
//            $table->double('corvina', 8, 2)->nullable();
//            $table->double('babosa', 8, 2)->nullable();
//            $table->double('guabina', 8, 2)->nullable();
//            $table->double('jaiba', 8, 2)->nullable();
//            $table->double('langosta', 8, 2)->nullable();
//            $table->double('pulpo', 8, 2)->nullable();
//            $table->double('jurel', 8, 2)->nullable();
//            $table->double('anguila', 8, 2)->nullable();
//            $table->double('pargo', 8, 2)->nullable();
//            $table->double('robalo', 8, 2)->nullable();
//            $table->double('cienero', 8, 2)->nullable();
//            $table->double('otras_especies', 8, 2)->nullable();
//            $table->string('observaciones')->nullable();
//            $table->foreignId('viaje_id')->constrained();
//            $table->foreignId('user_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lance_viajes');
    }
};
