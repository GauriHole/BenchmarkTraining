<?php

namespace App\Providers;

use App\Models\Task;
use App\Models\TaskCategory;
use App\Models\TaskReminder;
use App\Policies\TaskPolicy;
use App\Policies\TaskCategoryPolicy;
use App\Policies\TaskReminderPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        Task::class => TaskPolicy::class,
        TaskCategory::class => TaskCategoryPolicy::class,
        TaskReminder::class => TaskReminderPolicy::class,
    ];

    public function boot()
    {
        $this->registerPolicies();
    }
} 