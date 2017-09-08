<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Book extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'books';

    protected $fillable = [
        'title', 'author', 'publisher', 'year', 'isbn', 'status'
    ];

}
