<?php

namespace App\Jobs;

use App\Mail\TaskReminderMail;
use App\Models\Task;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendTaskReminderJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user;
    protected $task;

    public function __construct(User $user, Task $task)
    {
        $this->user = $user;
        $this->task = $task;
    }

    public function handle()
    {
        Mail::to($this->user->email)->send(new TaskReminderMail($this->task));
    }
} 