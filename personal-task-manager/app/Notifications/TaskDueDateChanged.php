<?php

namespace App\Notifications;

use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TaskDueDateChanged extends Notification implements ShouldQueue
{
    use Queueable;

    protected $task;
    protected $oldDueDate;

    public function __construct(Task $task, string $oldDueDate)
    {
        $this->task = $task;
        $this->oldDueDate = $oldDueDate;
    }

    public function via($notifiable): array
    {
        return ['mail'];
    }

    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Task Due Date Updated: ' . $this->task->title)
            ->greeting('Hello ' . $notifiable->name . '!')
            ->line('The due date of your task has been updated.')
            ->line('Task: ' . $this->task->title)
            ->line('Old Due Date: ' . $this->oldDueDate)
            ->line('New Due Date: ' . $this->task->due_date->format('M d, Y H:i'))
            ->action('View Task', url('/tasks/' . $this->task->id))
            ->line('Thank you for using our application!');
    }
} 