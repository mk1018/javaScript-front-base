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

Route::get('/', function () {
    return view('error');
});

Route::get('/login', function () {
    return view('html/login');
});

//----- ユーザ登録用
Route::get('/enter', function () {
    return view('html/enter');
});
Route::get('/regist', function () {
    return view('html/regist');
});

//----- 登録以降
Route::get('/navi', function () {
    return view('html/navi');
});
Route::get('/home', function () {
    return view('html/home');
});
Route::get('/profile', function () {
    return view('html/profile');
});
Route::get('/wallet', function () {
    return view('html/wallet');
});
Route::get('/network', function () {
    return view('html/network');
});


Route::get('/home_test', function () {
    return view('html/home_test');
});
