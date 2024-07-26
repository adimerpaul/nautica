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
        Schema::table('sales', function (Blueprint $table) {
            $table->unsignedBigInteger('viaje_id')->nullable();
            $table->foreign('viaje_id')->references('id')->on('viajes');
            $table->unsignedBigInteger('boat_id')->nullable();
            $table->foreign('boat_id')->references('id')->on('boats');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('sales', function (Blueprint $table) {
            $table->dropForeign(['viaje_id']);
            $table->dropColumn('viaje_id');
            $table->dropForeign(['boat_id']);
            $table->dropColumn('boat_id');
        });
    }
};
