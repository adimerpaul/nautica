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
        Schema::table('viajes', function (Blueprint $table) {
            $table->string('hora')->nullable();
            $table->string('dias')->nullable();
            $table->string('zarpe')->nullable();
            $table->string('puertoSalida')->nullable();
            $table->string('puertoLlegada')->nullable();
            $table->string('bandera')->nullable();
            $table->string('propietario')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('viajes', function (Blueprint $table) {
            $table->dropColumn('hora');
            $table->dropColumn('dias');
            $table->dropColumn('zarpe');
            $table->dropColumn('puertoSalida');
            $table->dropColumn('puertoLlegada');
            $table->dropColumn('bandera');
            $table->dropColumn('propietario');
        });
    }
};
