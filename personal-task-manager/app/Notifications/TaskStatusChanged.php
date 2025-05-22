<?php

namespace App\Notifications;

use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TaskStatusChanged extends Notification implements ShouldQueue
{
    use Queueable;

    protected $task;
    protected $oldStatus;

    public function __construct(Task $task, string $oldStatus)
    {
        $this->task = $task;
        $this->oldStatus = $oldStatus;
    }

    public function via($notifiable): array
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Task Status Updated: ' . $this->task->title)
            ->greeting('Hello ' . $notifiable->name . '!')
            ->line('The status of your task has been updated.')
            ->line('Task: ' . $this->task->title)
            ->line('Old Status: ' . ucfirst($this->oldStatus))
            ->line('New Status: ' . ucfirst($this->task->status))
            ->action('View Task', url('/tasks/' . $this->task->id))
            ->line('Thank you for using our application!');
    }
} 