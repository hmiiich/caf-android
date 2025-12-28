<?php // routes/api.php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CaftanController;
use App\Http\Controllers\ReservationController;

// Routes API "products"
Route::apiResource('products', ProductController::class);

// Page d'accueil (optionnel, généralement pas dans api.php)
Route::get('/', function () {
    return view('welcome');
});

// Authentification
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Caftans
Route::get('/caftans', [CaftanController::class, 'index']);        // Liste tous les caftans
Route::get('/caftans/{id}', [CaftanController::class, 'show']);    // Voir un caftan spécifique
Route::post('/caftans', [CaftanController::class, 'store']);
Route::get('/caftans/{id}/image', [CaftanController::class, 'getImage']);       // Ajouter un nouveau caftan

// Réservations
Route::post('/reservations', [ReservationController::class, 'store']);          // Créer une réservation
Route::get('/reservations/user/{id}', [ReservationController::class, 'userReservations']); // Réservations d'un utilisateur
Route::get('caftans/{id}/image', [CaftanController::class, 'getImage']);
