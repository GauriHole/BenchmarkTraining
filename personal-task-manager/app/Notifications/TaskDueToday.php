<?php

namespace App\Notifications;

use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TaskDueToday extends Notification implements ShouldQueue
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
            ->subject('Task Due Today: ' . $this->task->title)
            ->greeting('Hello ' . $notifiable->name . '!')
            ->line('This is a reminder that you have a task due today.')
            ->line('Task: ' . $this->task->title)
            ->line('Category: ' . $this->task->category->name)
            ->line('Due Time: ' . $this->task->due_date->format('H:i'))
            ->line('Priority: ' . ucfirst($this->task->priority))
            ->action('View Task', url('/tasks/' . $this->task->id))
            ->line('Please make sure to complete this task today.');
    }
} 