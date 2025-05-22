<?php

namespace App\Strategies;

use Illuminate\Database\Eloquent\Builder;

class PrioritySortingStrategy implements TaskSortingStrategy
{
    public function sort(Builder $query): Builder
    {
        return $query->orderBy('priority', 'desc');
    }
} 