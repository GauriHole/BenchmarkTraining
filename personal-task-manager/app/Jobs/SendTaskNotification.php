<?php

namespace App\Jobs;

use App\Models\Task;
use App\Services\NotificationService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendTaskNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $task;
    protected $notificationType;
    protected $oldValue;

    public function __construct(Task $task, string $notificationType, $oldValue = null)
    {
        $this->task = $task;
        $this->notificationType = $notificationType;
        $this->oldValue = $oldValue;
    }

    public function handle(NotificationService $notificationService)
    {
        switch ($this->notificationType) {
            case 'assigned':
                $notificationService->notifyTaskAssigned($this->task, $this->task->user);
                break;
            case 'completed':
                $notificationService->notifyTaskCompleted($this->task);
                break;
            case 'overdue':
                $notificationService->notifyTaskOverdue($this->task);
                break;
            case 'due_today':
                $notificationService->notifyTaskDueToday($this->task);
                break;
            case 'due_tomorrow':
                $notificationService->notifyTaskDueTomorrow($this->task);
                break;
            case 'status_changed':
                $notificationService->notifyTaskStatusChanged($this->task, $this->oldValue);
                break;
            case 'priority_changed':
                $notificationService->notifyTaskPriorityChanged($this->task, $this->oldValue);
                break;
            case 'due_date_changed':
                $notificationService->notifyTaskDueDateChanged($this->task, $this->oldValue);
                break;
        }
    }
} 