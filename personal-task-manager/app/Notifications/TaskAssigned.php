<?php

namespace App\Notifications;

use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TaskAssigned extends Notification implements ShouldQueue
{
    use Queueable;

    protected $task;

    public function __construct(Task $task)
    {
        $this->task = $task;
    }

    public function via($notifiable): array
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('New Task Assigned: ' . $this->task->title)
            ->greeting('Hello ' . $notifiable->name . '!')
            ->line('A new task has been assigned to you.')
            ->line('Task Title: ' . $this->task->title)
            ->line('Category: ' . $this->task->category->name)
            ->line('Due Date: ' . $this->task->due_date)
            ->line('Priority: ' . $this->task->priority)
            ->action('View Task', url('/tasks/' . $this->task->id))
            ->line('Please review and start working on this task as soon as possible.');
    }
} 