<?php

namespace App\Notifications;

use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TaskDueTomorrow extends Notification implements ShouldQueue
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
            ->subject('Task Due Tomorrow: ' . $this->task->title)
            ->greeting('Hello ' . $notifiable->name . '!')
            ->line('This is a reminder that you have a task due tomorrow.')
            ->line('Task: ' . $this->task->title)
            ->line('Category: ' . $this->task->category->name)
            ->line('Due Time: ' . $this->task->due_date->format('H:i'))
            ->line('Priority: ' . ucfirst($this->task->priority))
            ->action('View Task', url('/tasks/' . $this->task->id))
            ->line('Please plan accordingly to complete this task tomorrow.');
    }
} 