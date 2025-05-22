<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use App\Traits\ApiResponseTrait;
use Illuminate\Support\Facades\Log;
use Illuminate\Notifications\Notifiable;

class AuthController extends Controller
{
    use ApiResponseTrait, Notifiable;

    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        Log::info('User registered', ['user_id' => $user->id, 'email' => $user->email]);

        Auth::login($user); 

        return $this->success([
            'user' => $user,
        ], 'Registration successful', 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        Log::info('Login attempt', ['email' => $request->email]);

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = Auth::user(); // Get the authenticated user
        $token = $user->createToken('api-token')->plainTextToken; // Generate the token

        return response()->json([
            'user' => $user,
            'token' => $token, // Include the token in the response
        ], 200);
    }

    public function logout(Request $request)
    {
        // Revoke the token that was used to authenticate the current request
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out successfully']);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
