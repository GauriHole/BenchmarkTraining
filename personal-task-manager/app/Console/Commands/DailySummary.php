<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use App\Notifications\TaskOverdueNotification;
use App\Models\Task;
use Carbon\Carbon;

class DailySummary extends Command
{
    protected $signature = 'daily:summary';
    protected $description = 'Send daily summary or overdue notifications to users';

    public function handle()
    {
        $now = Carbon::now();
        $overdueTasks = Task::where('due_date', '<', $now)
            ->where('status', '!=', 'completed')
            ->get();

        foreach ($overdueTasks as $task) {
            $user = $task->user;
            if ($user) {
                $user->notify(new TaskOverdueNotification($task));
            }
        }
        $this->info('Daily summary/overdue notifications sent.');
    }
} 