<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function() { return Redirect::to('Camminus/'); });

Route::get('manu/clientes', 'LegacyManuController@clientes');

Route::get('/teste', function() {

    echo Carbon::now()->formatLocalized('Brasília %d de %B de %Y');

});

Route::get('manuca/clientes', 'LegacyManuController@clientes_ca');

Route::controller('login' , 'LoginController');

Route::get('reports/{reportType}/{id}' , 'ReportsController@generateReport');

Route::get('unique/{model}/{field}/{value}', 'UniqueFieldsController@checkUnique');

Route::group(array('before'=>'auth|admin'), function() {
    Route::resource('users', 'UserController');
    Route::resource('companies', 'CompaniesController');
    Route::resource('roles', 'RoleController');
});

Route::group(array('before'=>'auth'), function() {
    Route::resource('menus', 'MenuController');
    Route::resource('costumers', 'CostumerController');
    Route::resource('incidents', 'IncidentsController');
    Route::resource('services', 'ServicesController');
    Route::resource('fingerprints', 'FingerPrintsController');
});

