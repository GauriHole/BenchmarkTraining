<?php

namespace App\Http\Controllers;

use App\Models\TaskReminder;
use Illuminate\Http\Request;
use App\Traits\ApiResponseTrait;
use App\Enums\TaskStatusEnum;

class TaskReminderController extends Controller
{
    use ApiResponseTrait;

    public function index()
    {
        return response()->json(TaskReminder::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'task_id' => 'required|exists:tasks,id',
            'reminder_at' => 'required|date',
            'reminder_message' => 'nullable|string',
        ]);

        $reminder = $request->user()->reminders()->create($request->all());
        return $this->success($reminder, 'Reminder created successfully', 201);
    }

    public function show(TaskReminder $reminder)
    {
        $this->authorize('view', $reminder);
        return $this->success($reminder->load('task'), 'Reminder fetched successfully');
    }

    public function update(Request $request, TaskReminder $reminder)
    {
        $this->authorize('update', $reminder);

        $request->validate([
            'reminder_at' => 'required|date',
            'reminder_message' => 'nullable|string',
        ]);

        $reminder->update($request->all());
        return $this->success($reminder, 'Reminder updated successfully');
    }

    public function destroy(TaskReminder $reminder)
    {
        $this->authorize('delete', $reminder);
        $reminder->delete();
        return $this->success(null, 'Reminder deleted successfully', 204);
    }

    public function markAsSent(TaskReminder $reminder)
    {
        $this->authorize('update', $reminder);
        $reminder->markAsSent();
        return $this->success($reminder, 'Reminder marked as sent');
    }
}