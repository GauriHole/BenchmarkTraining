<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TaskCategoryController;
use App\Http\Controllers\TaskReminderController;
use App\Mail\TaskReminderMail;
use Illuminate\Support\Facades\Mail;
use App\Jobs\SendTaskReminderJob;
use App\Http\Controllers\CategoryController;

Route::get('/test-log', function () {
    \Log::error('Test error message');
    return 'Logged';
});

Route::middleware('auth:sanctum')->get('/debug-session', function () {
    return [
        'user' => auth()->user(),
        'session_id' => session()->getId(),
        'cookies' => request()->cookies->all(),
    ];
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'user']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    
    // Task routes
    Route::get('/tasks', [TaskController::class, 'index']);
    Route::post('/tasks', [TaskController::class, 'store']);
    Route::get('/tasks/{task}', [TaskController::class, 'show']);
    Route::put('/tasks/{task}', [TaskController::class, 'update']);
    Route::delete('/tasks/{task}', [TaskController::class, 'destroy']);

    // Task Category routes
    Route::get('/categories', [TaskCategoryController::class, 'index']);
    Route::post('/categories', [TaskCategoryController::class, 'store']);
    Route::get('/categories/{category}', [TaskCategoryController::class, 'show']);
    Route::put('/categories/{category}', [TaskCategoryController::class, 'update']);
    Route::delete('/categories/{category}', [TaskCategoryController::class, 'destroy']);

    // Task Reminder routes
    Route::get('/reminders', [TaskReminderController::class, 'index']);
    Route::post('/reminders', [TaskReminderController::class, 'store']);
    Route::get('/reminders/{reminder}', [TaskReminderController::class, 'show']);
    Route::put('/reminders/{reminder}', [TaskReminderController::class, 'update']);
    Route::delete('/reminders/{reminder}', [TaskReminderController::class, 'destroy']);
    Route::post('/reminders/{reminder}/mark-as-sent', [TaskReminderController::class, 'markAsSent']);

    // Notification routes
    Route::get('/notifications', function (Request $request) {
        return $request->user()->notifications()->orderBy('created_at', 'desc')->get();
    });
    
    Route::post('/notifications/{id}/mark-as-read', function (Request $request, $id) {
        $notification = $request->user()->notifications()->findOrFail($id);
        $notification->markAsRead();
        return response()->json(['message' => 'Notification marked as read']);
    });
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', function (Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    });
    Route::apiResource('tasks', TaskController::class);
    Route::get('/categories', [TaskCategoryController::class, 'index']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('tasks', TaskController::class);
});

Route::middleware('auth:sanctum')->get('/categories', [TaskCategoryController::class, 'index']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
