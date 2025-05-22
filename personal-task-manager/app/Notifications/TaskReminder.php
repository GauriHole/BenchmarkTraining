<?php

namespace App\Notifications;

use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TaskReminder extends Notification implements ShouldQueue
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
            ->subject('Task Reminder: ' . $this->task->title)
            ->greeting('Hello ' . $notifiable->name . '!')
            ->line('This is a reminder about your task.')
            ->line('Task: ' . $this->task->title)
            ->line('Category: ' . $this->task->category->name)
            ->line('Due Date: ' . $this->task->due_date->format('M d, Y H:i'))
            ->line('Priority: ' . ucfirst($this->task->priority))
            ->line('Status: ' . ucfirst($this->task->status))
            ->action('View Task', url('/tasks/' . $this->task->id))
            ->line('Please make sure to complete this task on time.');
    }
} 