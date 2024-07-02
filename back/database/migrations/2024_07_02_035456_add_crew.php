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
        Schema::table('crews', function (Blueprint $table) {
            $table->string('nacionalidad')->nullable();
            $table->string('tipoDocumento')->nullable();
            $table->string('numeroIdentificacion')->nullable();
            $table->string('telefono')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('crews', function (Blueprint $table) {
            $table->dropColumn('nacionalidad');
            $table->dropColumn('tipoDocumento');
            $table->dropColumn('numeroIdentificacion');
            $table->dropColumn('telefono');
        });
    }
};
