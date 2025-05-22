<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;
use App\Services\TaskService;

class TaskFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return TaskService::class;
    }
} 