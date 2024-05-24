<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void{
        DB::table('categories')->insert([
            ['name' => 'Pescado'],
            ['name' => 'Camaron'],
            ['name' => 'Cola decamaron'],
            ['name' => 'Langostas, pulpos, jaibas, otros'],
        ]);
    }
}
