<?php

use App\Http\Controllers\BookingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/", function () {
    return Inertia::render("Welcome");
});

Route::get("/book-a-call", [BookingController::class, "index"]);
Route::post("/book-a-call", [BookingController::class, "store"]);
