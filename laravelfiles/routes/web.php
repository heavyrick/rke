<?php

Route::get('/', function () {
    return view('index');
});

Route::group(['prefix' => 'api'], function() {
    Route::resource('books', BooksController::class, ['except' => ['create', 'edit']]);
});


Route::any('{path?}', function() {
    return view("index");
})->where("path", ".+");