<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use App\Models\Task;
use App\Models\TaskReminder;
use App\Observers\TaskObserver;
use App\Observers\TaskReminderObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);
        // Register observers
        Task::observe(TaskObserver::class);
        TaskReminder::observe(TaskReminderObserver::class);
    }
}
