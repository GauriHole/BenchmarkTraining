<?php

namespace App\Contracts;

use App\Models\Task;
use Illuminate\Database\Eloquent\Collection;

interface TaskServiceInterface
{
    public function getAllTasks(): Collection;
    public function getTaskById(int $id): ?Task;
    public function createTask(array $data): Task;
    public function updateTask(Task $task, array $data): bool;
    public function deleteTask(Task $task): bool;
    public function getUserTasks(int $userId): Collection;
    public function getCategoryTasks(int $categoryId): Collection;
    public function getOverdueTasks(): Collection;
    public function getDueTodayTasks(): Collection;
    public function getDueTomorrowTasks(): Collection;
    public function getTasksByStatus(string $status): Collection;
    public function getTasksByPriority(string $priority): Collection;
    public function markTaskAsComplete(Task $task): bool;
    public function markTaskAsIncomplete(Task $task): bool;
    public function updateTaskPriority(Task $task, string $priority): bool;
    public function updateTaskStatus(Task $task, string $status): bool;
    public function updateTaskDueDate(Task $task, string $dueDate): bool;
    public function assignTaskToUser(Task $task, int $userId): bool;
    public function addTaskToCategory(Task $task, int $categoryId): bool;
} 