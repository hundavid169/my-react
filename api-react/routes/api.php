<?php

use Illuminate\Http\Request;
Use App\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', 'UserController@index');
Route::post('/users/add', 'UserController@store');
Route::get('/users/show/{id}', 'UserController@show');
Route::delete('/users/delete/{id}', 'UserController@destroy');
Route::put('/users/update/{id}', 'UserController@update');
Route::get('/users/image/{image}', 'UserController@image');
 


