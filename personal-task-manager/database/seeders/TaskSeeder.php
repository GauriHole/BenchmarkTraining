<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Task;

class TaskSeeder extends Seeder
{
    public function run()
    {
        // For each user, create 10 tasks
        User::all()->each(function ($user) {
            Task::factory()->count(10)->create(['user_id' => $user->id]);
        });
    }
} 