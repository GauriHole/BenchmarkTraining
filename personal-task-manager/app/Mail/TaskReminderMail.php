<?php

namespace App\Mail;

use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TaskReminderMail extends Mailable
{
    use Queueable, SerializesModels;

    public $task;

    public function __construct(Task $task)
    {
        $this->task = $task;
    }

    public function build()
    {
        $subjectPrefix = $this->task->wasRecentlyCreated ? 'Task Created: ' : 'Task Updated: ';
        return $this->subject($subjectPrefix . $this->task->title)
            ->text('emails.task_reminder_plain')
            ->with([
            'task' => $this->task,
            ]);
    }
}