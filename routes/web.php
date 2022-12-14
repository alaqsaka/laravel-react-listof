<?php

use App\Http\Controllers\PostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',  [PostController::class, 'index']);

Route::post('/posts',  [PostController::class, 'store'])
    ->middleware(['auth', 'verified'])->name('create.posts');

Route::get('/posts',  [PostController::class, 'show'])
    ->middleware(['auth', 'verified'])->name('my.posts');

Route::get('/posts/edit', [PostController::class, 'edit'])
    ->middleware(['auth', 'verified'])
    ->name('edit.posts');
    
Route::post('/posts/update',  [PostController::class, 'update'])
    ->middleware(['auth', 'verified'])
    ->name('update.posts');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
