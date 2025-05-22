<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\DatabaseMessage;
use App\Models\Task;

class TaskOverdueNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $task;

    public function __construct(Task $task)
    {
        $this->task = $task;
    }

    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Task Overdue: ' . $this->task->title)
            ->line('Your task "' . $this->task->title . '" is overdue!')
            ->line('Due date: ' . ($this->task->due_date ?? 'N/A'))
            ->action('View Task', url('/tasks/' . $this->task->id))
            ->line('Please complete your task as soon as possible.');
    }

    public function toArray($notifiable)
    {
        return [
            'task_id' => $this->task->id,
            'title' => $this->task->title,
            'due_date' => $this->task->due_date,
        ];
    }
} 