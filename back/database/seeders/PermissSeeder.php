<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void{
        Permission::create(['name' => 'ver ventas', 'group' => 'ventas']);
        Permission::create(['name' => 'crear ventas', 'group' => 'ventas']);
        Permission::create(['name' => 'editar ventas', 'group' => 'ventas']);
        Permission::create(['name' => 'anular ventas', 'group' => 'ventas']);

        Permission::create(['name' => 'ver productos', 'group' => 'productos']);
        Permission::create(['name' => 'crear productos', 'group' => 'productos']);
        Permission::create(['name' => 'editar productos', 'group' => 'productos']);
        Permission::create(['name' => 'eliminar productos', 'group' => 'productos']);

        Permission::create(['name' => 'ver clientes', 'group' => 'clientes']);
        Permission::create(['name' => 'crear clientes', 'group' => 'clientes']);
        Permission::create(['name' => 'editar clientes', 'group' => 'clientes']);
        Permission::create(['name' => 'eliminar clientes', 'group' => 'clientes']);

        Permission::create(['name' => 'ver usuarios', 'group' => 'usuarios']);
        Permission::create(['name' => 'crear usuarios', 'group' => 'usuarios']);
        Permission::create(['name' => 'editar usuarios', 'group' => 'usuarios']);
        Permission::create(['name' => 'eliminar usuarios', 'group' => 'usuarios']);

        $user = User::find(1);

        $user->givePermissionTo('ver ventas');
        $user->givePermissionTo('crear ventas');
        $user->givePermissionTo('editar ventas');
        $user->givePermissionTo('anular ventas');
        $user->givePermissionTo('ver productos');
        $user->givePermissionTo('crear productos');
        $user->givePermissionTo('editar productos');
        $user->givePermissionTo('eliminar productos');
        $user->givePermissionTo('ver clientes');
        $user->givePermissionTo('crear clientes');
        $user->givePermissionTo('editar clientes');
        $user->givePermissionTo('eliminar clientes');
        $user->givePermissionTo('ver usuarios');
        $user->givePermissionTo('crear usuarios');
        $user->givePermissionTo('editar usuarios');
        $user->givePermissionTo('eliminar usuarios');
    }
}
