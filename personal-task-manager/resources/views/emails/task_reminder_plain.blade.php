Task Reminder

Hello,

This is a reminder for your task:

Title: {{ $task->title }}
Description: {{ $task->description }}
Status: {{ $task->status }}
Due Date: {{ $task->due_date ? \Carbon\Carbon::parse($task->due_date)->toDayDateTimeString() : 'No due date' }}

Please make sure to complete your task on time!