<?php

use Illuminate\Support\Facades\Route;

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

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

/**
 * Add routes for collection index's
 */
Route::statamic('/projects', 'projects.index' );
Route::statamic('/feed', 'feed.index');
Route::statamic('/galleries', 'galleries.index');