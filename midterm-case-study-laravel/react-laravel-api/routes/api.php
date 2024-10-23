<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('products', App\Http\Controllers\ProductController::class);
Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'apiLogin']);
Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class, 'register']);