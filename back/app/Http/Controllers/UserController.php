<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;

class UserController extends Controller{
    public function login(Request $request){
        $credentials = $request->only('username', 'password');
        $user = User::where('username', $credentials['username'])->with('permissions')->first();
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
        $user = User::with('permissions')->find($request->user()->id);
        $permisosName = [];
        foreach($user->permissions as $permiso){
            $permisosName[] = $permiso->name;
        }
        $user->permisosName = $permisosName;
        return $user;
    }
    public function updatePermissions(Request $request, $id){
        $user = User::find($id);
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
    public function index(){
        $users= User::orderBy('id', 'desc')->with('permissions')->get();
//        $permisosId = [];
//        foreach($users as $user){
//            $permisosId = [];
//            foreach($user->permissions as $permiso){
//                $permisosId[] = $permiso->id;
//            }
//            $user->permisosId = $permisosId;
//        }
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
        $user->password = Hash::make($request->password);
        $user->save();
        return $user;
    }
    public function update(Request $request, $id){
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->role = $request->role;
        $user->save();
        return $user;
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
