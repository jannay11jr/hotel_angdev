<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    function create(Request $request) {
        $user = new User();
        $user->name = $request->name;
        $user->surname = $request->surname;
        $user->email = $request->email;
        $user->telephone = $request->telephone;
        $user->password = $request->password;
        $user->save();

        return response()->json(['message' => 'Usuario creado con éxito', 'user' => $user]);

    }
}
