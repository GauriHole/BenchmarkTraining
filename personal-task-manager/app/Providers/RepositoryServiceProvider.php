<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Contracts\TaskRepositoryInterface;
use App\Contracts\TaskCategoryRepositoryInterface;
use App\Contracts\TaskServiceInterface;
use App\Contracts\TaskCategoryServiceInterface;
use App\Contracts\NotificationServiceInterface;
use App\Repositories\TaskRepository;
use App\Repositories\TaskCategoryRepository;
use App\Services\TaskService;
use App\Services\TaskCategoryService;
use App\Services\NotificationService;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        // Repositories
        $this->app->bind(TaskRepositoryInterface::class, TaskRepository::class);
        $this->app->bind(TaskCategoryRepositoryInterface::class, TaskCategoryRepository::class);

        // Services
        $this->app->bind(TaskServiceInterface::class, TaskService::class);
        $this->app->bind(TaskCategoryServiceInterface::class, TaskCategoryService::class);
        $this->app->bind(NotificationServiceInterface::class, NotificationService::class);
    }
} 