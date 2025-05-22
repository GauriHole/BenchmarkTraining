<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $tasks = Auth::user()->tasks()->paginate(5); // 5 tasks per page
        return response()->json($tasks);
    }

    public function store(Request $request)
    {
        \Log::info('Creating task', ['request' => $request->all()]);
        
        try {
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'nullable|string',
                'status' => 'required|string|in:pending,in_progress,completed',
                'due_date' => 'nullable|date',
                'category_id' => 'nullable|exists:task_categories,id',
                'priority' => 'nullable|string|in:low,medium,high',
            ]);

            $task = Task::create([
                'title' => $validated['title'],
                'description' => $validated['description'] ?? null,
                'status' => $validated['status'],
                'due_date' => $validated['due_date'] ?? null,
                'category_id' => $validated['category_id'] ?? null,
                'priority' => $validated['priority'] ?? 'medium',
                'user_id' => auth()->id(),
            ]);
            
            \Log::info('Task created successfully', ['task' => $task]);
            
            return response()->json([
                'task' => $task,
                'message' => 'Task created successfully'
            ], 201);
        } catch (\Exception $e) {
            \Log::error('Failed to create task', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            return response()->json([
                'message' => 'Failed to create task: ' . $e->getMessage()
            ], 500);
        }
    }

    public function show(Task $task)
    {
        if (!$task) {
            return response()->json(['message' => 'Task not found'], 404);
        }
        return response()->json(['task' => $task, 'message' => 'Task fetched successfully']);
    }

    public function update(Request $request, Task $task)
    {
        if ($task->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|string|in:pending,in_progress,completed',
            'due_date' => 'nullable|date',
            'category_id' => 'nullable|exists:task_categories,id',
        ]);

        $task->update([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? $task->description,
            'status' => $validated['status'],
            'due_date' => $validated['due_date'] ?? $task->due_date,
            'category_id' => $validated['category_id'] ?? $task->category_id,
        ]);

        return response()->json(['task' => $task, 'message' => 'Task updated successfully']);
    }

    public function destroy(Task $task)
    {
        if ($task->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $task->delete();
        return response()->json(['message' => 'Task deleted successfully'], 204);
    }
}