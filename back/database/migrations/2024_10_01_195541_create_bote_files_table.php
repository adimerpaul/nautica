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
        Schema::create('bote_files', function (Blueprint $table) {
            $table->id();
            $table->string('documento');
            $table->string('file');
            $table->string('anio');
            $table->date('fecha');
            $table->unsignedBigInteger('boat_id');
            $table->foreign('boat_id')->references('id')->on('boats');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bote_files');
    }
};
