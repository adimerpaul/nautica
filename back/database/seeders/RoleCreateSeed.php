<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleCreateSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void{
        Role::create(['name' => 'ADMIN']);
        Role::create(['name' => 'VENDEDOR']);
        Role::create(['name' => 'PATRON']);
        Role::create(['name' => 'SUPERADMIN']);
//0 1,ver inicio
//1 2,ver usuarios
//2 3,ver empresas
//3 4,ver botes
//4 5,ver tripulantes
//5 6,ver clientes
//6 7,ver viajes
//7 8,ver ventas
//8 9,ver deudores
//9 10,ver productos

        $permisos = Permission::all();
        Role::findByName('SUPERADMIN')->givePermissionTo($permisos);
        Role::findByName('ADMIN')->givePermissionTo(
            [
                $permisos[0],
                $permisos[1],
                $permisos[2],
                $permisos[3],
                $permisos[4],
                $permisos[5],
                $permisos[6],
                $permisos[7],
                $permisos[8],
                $permisos[9],
            ]
        );
        Role::findByName('VENDEDOR')->givePermissionTo([
            $permisos[0],
            $permisos[7],
            $permisos[8],
            $permisos[5],
        ]);
        Role::findByName('PATRON')->givePermissionTo([
            $permisos[0],
            $permisos[4],
            $permisos[6],
            $permisos[7],
            $permisos[8],
        ]);
    }
}
