<?php

namespace Database\Factories;

use App\Models\Task;
use App\Models\User;
use App\Models\TaskCategory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class TaskFactory extends Factory
{
    protected $model = Task::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'category_id' => TaskCategory::factory(),
            'title' => $this->faker->sentence(4),
            'description' => $this->faker->paragraph(),
            'status' => $this->faker->randomElement(['pending', 'in_progress', 'completed']),
            'due_date' => $this->faker->optional()->dateTimeBetween('now', '+1 month'),
            'priority' => $this->faker->randomElement(['low', 'medium', 'high']),
            'completed_at' => $this->faker->optional(0.3)->dateTimeBetween('-1 month', 'now'),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
} 