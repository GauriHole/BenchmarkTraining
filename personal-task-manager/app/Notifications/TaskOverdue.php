<?php

namespace App\Notifications;

use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TaskOverdue extends Notification implements ShouldQueue
{
    use Queueable;

    protected $task;

    public function __construct(Task $task)
    {
        $this->task = $task;
    }

    public function via($notifiable): array
    {
        return ['mail'];
    }

    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Task Overdue: ' . $this->task->title)
            ->greeting('Hello ' . $notifiable->name . '!')
            ->line('This is a reminder that you have an overdue task.')
            ->line('Task: ' . $this->task->title)
            ->line('Category: ' . $this->task->category->name)
            ->line('Due Date: ' . $this->task->due_date->format('M d, Y H:i'))
            ->line('Priority: ' . ucfirst($this->task->priority))
            ->action('View Task', url('/tasks/' . $this->task->id))
            ->line('Please complete this task as soon as possible.');
    }
} 