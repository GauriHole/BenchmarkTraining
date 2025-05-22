<?php

namespace App\Strategies;

use Illuminate\Database\Eloquent\Builder;

class DueDateSortingStrategy implements TaskSortingStrategy
{
    public function sort(Builder $query): Builder
    {
        return $query->orderBy('due_date', 'asc');
    }
} 