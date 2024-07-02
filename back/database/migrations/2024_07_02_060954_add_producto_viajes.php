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
        Schema::table('producto_viajes', function (Blueprint $table) {
            $table->unsignedBigInteger('descarga_id')->nullable();
            $table->foreign('descarga_id')->references('id')->on('descargas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('producto_viajes', function (Blueprint $table) {
            $table->dropForeign(['descarga_id']);
            $table->dropColumn('descarga_id');
        });
    }
};
