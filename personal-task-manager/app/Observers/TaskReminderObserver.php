<?php

namespace App\Observers;

use App\Models\TaskReminder;
use Illuminate\Support\Facades\Log;

class TaskReminderObserver
{
    public function created(TaskReminder $reminder)
    {
        Log::debug('TaskReminderObserver: Reminder created', [
            'id' => $reminder->id,
            'task_id' => $reminder->task_id,
            'reminder_at' => $reminder->reminder_at,
            'is_sent' => $reminder->is_sent,
        ]);
    }

    public function updated(TaskReminder $reminder)
    {
        Log::debug('TaskReminderObserver: Reminder updated', [
            'id' => $reminder->id,
            'task_id' => $reminder->task_id,
            'reminder_at' => $reminder->reminder_at,
            'is_sent' => $reminder->is_sent,
        ]);
    }

}