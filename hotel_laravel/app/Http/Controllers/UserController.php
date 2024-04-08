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

    public function store (Request $request){

        $credentials = $request->only('email','password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('/');
        }
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }
}
