<?php

namespace App\Notifications;

use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TaskPriorityChanged extends Notification implements ShouldQueue
{
    use Queueable;

    protected $task;
    protected $oldPriority;

    public function __construct(Task $task, string $oldPriority)
    {
        $this->task = $task;
        $this->oldPriority = $oldPriority;
    }

    public function via($notifiable): array
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Task Priority Updated: ' . $this->task->title)
            ->greeting('Hello ' . $notifiable->name . '!')
            ->line('The priority of your task has been updated.')
            ->line('Task: ' . $this->task->title)
            ->line('Old Priority: ' . ucfirst($this->oldPriority))
            ->line('New Priority: ' . ucfirst($this->task->priority))
            ->action('View Task', url('/tasks/' . $this->task->id))
            ->line('Thank you for using our application!');
    }
} 