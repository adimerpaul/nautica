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
        Schema::table('boats', function (Blueprint $table) {
            $table->string('dif')->nullable();
            $table->string('autoridad')->nullable();
            $table->string('licencia')->nullable();
            $table->date('dif_fecha')->nullable();
            $table->date('autoridad_fecha')->nullable();
            $table->date('licencia_fecha')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('boats', function (Blueprint $table) {
            $table->dropColumn('dif');
            $table->dropColumn('autoridad');
            $table->dropColumn('licencia');
            $table->dropColumn('dif_fecha');
            $table->dropColumn('autoridad_fecha');
            $table->dropColumn('licencia_fecha');
        });
    }
};
