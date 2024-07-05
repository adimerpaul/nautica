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
        Schema::table('sales.blade.php', function (Blueprint $table) {
            $table->string('observacion')->nullable();
            $table->string('pago')->comment('TRANSFERENCIA, EFECTIVO')->nullable();
            $table->text('description')->nullable();
            $table->string('tipo_venta')->default('INGRESO')->comment('INGRESO, EGRESO');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('sales.blade.php', function (Blueprint $table) {
            $table->dropColumn('observacion');
            $table->dropColumn('pago');
            $table->dropColumn('description');
            $table->dropColumn('tipo_venta');
        });
    }
};
