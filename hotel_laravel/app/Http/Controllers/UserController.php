<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function create(Request $request) {
        $user = new User();
        $user->name = $request->name;
        $user->surname = $request->surname;
        $user->email = $request->email;
        $user->telephone = $request->telephone;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json(['message' => 'Usuario creado con éxito', 'user' => $user]);

    }

    public function logout(Request $request) {
        Auth::logout();
    }

    public function store (Request $request){

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if(!Auth::attempt($credentials)){
            return response()->json(['authorized'=> false], 201);
        }

        $user = User::where('email', $request->user()->email)->first();


        $token = $user->createToken('authToken', [], null)->plainTextToken;

        return response()->json([
            'authorized' => true,
            'user' => $user,
            'token' => $token
        ], 200);
    }
}
