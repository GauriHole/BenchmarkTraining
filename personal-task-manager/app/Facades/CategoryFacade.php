<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;
use App\Services\TaskCategoryService;

class CategoryFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return TaskCategoryService::class;
    }
} 