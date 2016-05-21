<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/user/login', 'UsersController@login');
Route::post('/user', 'UsersController@index');
Route::post('/report/send', 'ReportsController@store');

Route::get('/hero/{id}', 'HeroesController@index');
Route::get('/abilities/{id}', 'AbilitiesController@index');