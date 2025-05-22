<?php
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;
use App\Models\Task;
use App\Mail\TaskReminderMail;
use Illuminate\Support\Facades\Mail;

Route::get('/assets/{path}', function ($path) {
    $fullPath = public_path("assets/{$path}");
    if (File::exists($fullPath)) {
        $mimeType = File::mimeType($fullPath);
        return Response::file($fullPath, [
            'Content-Type' => $mimeType
        ]);
    }
    abort(404);
})->where('path', '.*');

Route::get('/{any}', function () {
    return file_get_contents(public_path('index.html'));
})->where('any', '.*');


Route::get('/mail-preview/task-reminder/{task}', function (Task $task) {
    return (new App\Mail\TaskReminderMail($task))->render();
});
