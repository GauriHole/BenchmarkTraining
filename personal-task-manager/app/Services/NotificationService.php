<?php

namespace App\Services;

use App\Contracts\NotificationServiceInterface;
use App\Models\Task;
use App\Models\User;
use App\Notifications\TaskAssigned;
use App\Notifications\TaskCompleted;
use App\Notifications\TaskOverdue;
use App\Notifications\TaskDueToday;
use App\Notifications\TaskDueTomorrow;
use App\Notifications\TaskStatusChanged;
use App\Notifications\TaskPriorityChanged;
use App\Notifications\TaskDueDateChanged;
use App\Notifications\TaskReminder;

class NotificationService implements NotificationServiceInterface
{
    public function notifyTaskAssigned(Task $task, User $user): void
    {
        $user->notify(new TaskAssigned($task));
    }

    public function notifyTaskCompleted(Task $task): void
    {
        $task->user->notify(new TaskCompleted($task));
    }

    public function notifyTaskOverdue(Task $task): void
    {
        $task->user->notify(new TaskOverdue($task));
    }

    public function notifyTaskDueToday(Task $task): void
    {
        $task->user->notify(new TaskDueToday($task));
    }

    public function notifyTaskDueTomorrow(Task $task): void
    {
        $task->user->notify(new TaskDueTomorrow($task));
    }

    public function notifyTaskStatusChanged(Task $task, string $oldStatus): void
    {
        $task->user->notify(new TaskStatusChanged($task, $oldStatus));
    }

    public function notifyTaskPriorityChanged(Task $task, string $oldPriority): void
    {
        $task->user->notify(new TaskPriorityChanged($task, $oldPriority));
    }

    public function notifyTaskDueDateChanged(Task $task, string $oldDueDate): void
    {
        $task->user->notify(new TaskDueDateChanged($task, $oldDueDate));
    }

    public function sendTaskReminder(Task $task): void
    {
        $task->user->notify(new TaskReminder($task));
    }
} 