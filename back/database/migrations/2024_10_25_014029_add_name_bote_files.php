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
//        bote_files
        Schema::table('bote_files', function (Blueprint $table) {
            $table->string('name')->after('documento')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('bote_files', function (Blueprint $table) {
            $table->dropColumn('name');
        });
    }
};
