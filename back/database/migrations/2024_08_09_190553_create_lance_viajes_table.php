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
        Schema::create('lances', function (Blueprint $table) {
            $table->id();
            $table->date('fecha');
            $table->string('numero');
            $table->time('hora_inicio')->nullable();
            $table->time('hora_fin')->nullable();
            $table->double('latitud', 8, 6)->nullable();
            $table->double('longitud', 9, 6)->nullable();
            $table->string('status')->default('ACTIVO');
            $table->unsignedBigInteger('viaje_id');
            $table->foreign('viaje_id')->references('id')->on('viajes');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lances');
    }
};
