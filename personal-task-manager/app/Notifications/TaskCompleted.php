<?php

namespace App\Notifications;

use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TaskCompleted extends Notification implements ShouldQueue
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
            ->subject('Task Completed: ' . $this->task->title)
            ->greeting('Hello ' . $notifiable->name . '!')
            ->line('Congratulations! You have completed a task.')
            ->line('Task: ' . $this->task->title)
            ->line('Category: ' . $this->task->category->name)
            ->line('Completed at: ' . $this->task->completed_at->format('M d, Y H:i'))
            ->action('View Task', url('/tasks/' . $this->task->id))
            ->line('Keep up the good work!');
    }
} 