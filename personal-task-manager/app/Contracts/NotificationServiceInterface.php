<?php

namespace App\Contracts;

use App\Models\Task;
use App\Models\User;

interface NotificationServiceInterface
{
    public function notifyTaskAssigned(Task $task, User $user): void;
    public function notifyTaskCompleted(Task $task): void;
    public function notifyTaskOverdue(Task $task): void;
    public function notifyTaskDueToday(Task $task): void;
    public function notifyTaskDueTomorrow(Task $task): void;
    public function notifyTaskStatusChanged(Task $task, string $oldStatus): void;
    public function notifyTaskPriorityChanged(Task $task, string $oldPriority): void;
    public function notifyTaskDueDateChanged(Task $task, string $oldDueDate): void;
    public function sendTaskReminder(Task $task): void;
} 