<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function ($info = null) {
    return Inertia::render('welcome', $info ?? [
        'info' => [
            'title' => 'Welcome',
            'description' => 'This is the default welcome page for this Laravel app.',
        ],
    ]);
})->name('home');


Route::get('/docs', function () {
    return Inertia::render('docs');
})->name('docs');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});



require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
