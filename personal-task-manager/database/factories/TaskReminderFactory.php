<?php

namespace Database\Factories;

use App\Models\TaskReminder;
use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskReminderFactory extends Factory
{
    protected $model = TaskReminder::class;

    public function definition(): array
    {
        return [
            'task_id' => Task::factory(),
            'reminder_time' => $this->faker->dateTimeBetween('now', '+1 week'),
            'reminder_type' => $this->faker->randomElement(['email', 'notification']),
            'is_sent' => false,
        ];
    }
} 