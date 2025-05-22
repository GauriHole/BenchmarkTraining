<?php

namespace App\Observers;

use App\Models\Task;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\TaskReminderMail;
use App\Jobs\SendTaskReminderJob;
use Carbon\Carbon;

class TaskObserver
{
    public function created(Task $task)
    {
        Log::channel('task_creation')->info('Task created', [
        'task_id' => $task->id,
        'user_id' => $task->user_id,
        'task_status' => $task->status,
        'task_title' => $task->title,
        'created_by' => $task->user ? $task->user->name : null,
        ]);

        try {
            $email = new TaskReminderMail($task);
            $plainTextContent = $email->render(); // Render the email content
            $plainTextContent = strip_tags($plainTextContent); // Remove HTML tags

            Log::info('Email content:', ['content' => $plainTextContent]);

            Mail::to($task->user->email)->send($email);
            Log::info('Task reminder email sent successfully', ['task_id' => $task->id]);
        } catch (\Exception $e) {
            Log::error('Failed to send task reminder email', [
                'task_id' => $task->id,
                'error' => $e->getMessage(),
            ]);
        }

        if ($task->due_date) {
            $user = $task->user;
            if ($user) {
                $delay = Carbon::parse($task->due_date)->subHour();
                SendTaskReminderJob::dispatch($user, $task)->delay($delay);
            }
        }
    }

    public function updated(Task $task)
    {
        Log::channel('task_update')->info('Task updated', [
            'task_id' => $task->id,
            'user_id' => $task->user_id,
            'task_title' => $task->title,
            'updated_by' => $task->user ? $task->user->name : null,
        ]);

        $user = $task->user;
        if ($user) {
            try {
                $email = new TaskReminderMail($task);
                $plainTextContent = $email->render();
                $plainTextContent = strip_tags($plainTextContent);

                Log::channel('task_update')->info('Email content (update):', ['content' => $plainTextContent]);

                Mail::to($user->email)->send($email);
                Log::channel('task_update')->info('Task reminder email sent successfully (update)', ['task_id' => $task->id]);
            } catch (\Exception $e) {
                Log::channel('task_update')->error('Failed to send task reminder email (update)', [
                    'task_id' => $task->id,
                    'error' => $e->getMessage(),
                ]);
            }

            if ($task->due_date) {
                $delay = Carbon::parse($task->due_date)->subHour();
                SendTaskReminderJob::dispatch($user, $task)->delay($delay);
            }
        }
    }

    public function deleted(Task $task)
    {
        Log::info('Task deleted', ['task_id' => $task->id, 'user_id' => $task->user_id]);

        $user = $task->user;
        if ($user) {
            try {
                $email = new TaskReminderMail($task);
                $plainTextContent = $email->render();
                $plainTextContent = strip_tags($plainTextContent);

                Log::info('Email content (delete):', ['content' => $plainTextContent]);

                Mail::to($user->email)->send($email);
                Log::info('Task reminder email sent successfully (delete)', ['task_id' => $task->id]);
            } catch (\Exception $e) {
                Log::error('Failed to send task reminder email (delete)', [
                    'task_id' => $task->id,
                    'error' => $e->getMessage(),
                ]);
            }

            SendTaskReminderJob::dispatch($user, $task);
        }
    }
}