<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserController extends Controller{
    function permissionsRole($id, Request $request){
        $role = Role::find($id);
        $role->syncPermissions($request->permissions);
        return $role;
    }
    function roles(){
        $roles = Role::with('permissions')->get();
        foreach ($roles as $role){
            $permisosName = [];
            foreach($role->permissions as $permiso){
                $permisosName[] = $permiso->name;
            }
            $permisosId = [];
            foreach($role->permissions as $permiso){
                $permisosId[] = $permiso->id;
            }
            $role->permisosId = $permisosId;
//            $role->permisosName = $permisosName;
        }
        return $roles;
    }
    public function login(Request $request){
        $credentials = $request->only('username', 'password');
        $user = User::where('username', $credentials['username'])->with('permissions','roles','company')->first();
        $permisosName = [];
        foreach($user->permissions as $permiso){
            $permisosName[] = $permiso->name;
        }
        $user->permisosName = $permisosName;
        if(!$user || !password_verify($credentials['password'], $user->password)){
            return response()->json([
                'message' => 'Usuario o password es incorrecto',
            ], 401);
        }else{
            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json([
                'token' => $token,
                'user' => $user,
            ]);
        }
    }
    public function me(Request $request){
        $user = User::with(['permissions','roles','company'])->find($request->user()->id);
        $permisosName = [];
        foreach($user->permissions as $permiso){
            $permisosName[] = $permiso->name;
        }
        $user->permisosName = $permisosName;
        return $user;
    }
    public function updatePermissions(Request $request, $id){
        error_log(json_encode($request->permissions));
        $user = User::find($id);
        error_log($user);
        $permisos= Permission::all();
        error_log(json_encode($permisos));
        $user->syncPermissions($request->permissions);
        return User::with('permissions')->find($id);
    }
    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => 'Token eliminado',
        ]);
    }
    function permissions(){
        $permissions = Permission::all();
        return $permissions;
    }
    public function index(Request $request){
        $user = $request->user();
        if ($user->id == 1) {
            $users= User::orderBy('id', 'desc')
                ->with(['permissions', 'company', 'boat'])
                ->get();
            return $users;
        }else{
            $users= User::where('company_id', $user->company_id)
                ->orderBy('id', 'desc')
                ->with(['permissions', 'company', 'boat'])
                ->get();
            return $users;
        }
//        $users= User::orderBy('id', 'desc')
//            ->with(['permissions', 'company', 'boat'])
//            ->get();
        return $users;
    }
    public function store(Request $request){
        $validatedData = $request->validate([
            'name' => 'required',
            'username' => 'required|unique:users',
            'role' => 'required',
            'password' => 'required',
        ]);
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->role = $request->role;
        $user->company_id = $request->company_id;
        $user->bote_id = $request->boat_id;
        $user->password = Hash::make($request->password);
        $user->save();
        $role = Role::where('name', $request->role)->first();
        $permissions = $role->permissions;
        $user->syncPermissions($permissions);
        return User::with(['permissions', 'company', 'boat'])->find($user->id);
    }
    public function update(Request $request, $id){
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->role = $request->role;
        $user->company_id = $request->company_id;
        $user->bote_id = $request->boat_id;
        $user->save();
        return User::with(['permissions', 'company', 'boat'])->find($user->id);
    }
    public function delete($id){
        $user = User::find($id);
        $user->delete();
        return $user;
    }
    public function passwordUpdate(Request $request, $id){
        $user = User::find($id);
        $user->password = Hash::make($request->password);
        $user->save();
        return $user;
    }
}
