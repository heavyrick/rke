<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Entities\Book;

/**
 * Class BookTransformer
 * @package namespace App\Transformers;
 */
class BookTransformer extends TransformerAbstract
{

    /**
     * Transform the \Book entity
     * @param \Book $model
     *
     * @return array
     */
    public function transform(Book $model)
    {
        return [
            'id'         => (int) $model->id,
            'title'      => $model->title,
            'author'     => $model->author,
            'publisher'  => $model->publisher,
            'year'       => (int) $model->year,
            'isbn'       => $model->isbn,
            'status'     => $model->status,
            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
