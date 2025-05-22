<?php

namespace App\Strategies;

use Illuminate\Database\Eloquent\Builder;

interface TaskSortingStrategy
{
    public function sort(Builder $query): Builder;
} 