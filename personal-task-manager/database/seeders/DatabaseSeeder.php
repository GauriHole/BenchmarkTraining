<?php

namespace Database\Seeders;

use App\Models\Task;
use App\Models\TaskCategory;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // Create a test user
        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
        ]);

        // Create default categories for the test user
        $categories = [
            ['name' => 'Work', 'color' => '#3B82F6', 'is_default' => true],
            ['name' => 'Personal', 'color' => '#10B981', 'is_default' => true],
            ['name' => 'Shopping', 'color' => '#F59E0B', 'is_default' => true],
        ];

        foreach ($categories as $category) {
            TaskCategory::factory()->create([
                'user_id' => $user->id,
                'name' => $category['name'],
                'color' => $category['color'],
                'is_default' => $category['is_default'],
            ]);
        }

        // Create some tasks for the test user
        Task::factory()->count(10)->create([
            'user_id' => $user->id,
        ]);

        // Create additional users with their tasks and categories
        User::factory()->count(5)->create()->each(function ($user) {
            TaskCategory::factory()->count(3)->create([
                'user_id' => $user->id,
            ])->each(function ($category) use ($user) {
                Task::factory()->count(5)->create([
                    'user_id' => $user->id,
                    'category_id' => $category->id,
                ]);
            });
        });
    }
}
