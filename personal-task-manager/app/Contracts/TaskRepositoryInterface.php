<?php

namespace App\Contracts;

use App\Models\Task;
use Illuminate\Database\Eloquent\Collection;

interface TaskRepositoryInterface
{
    public function all(): Collection;
    public function find(int $id): ?Task;
    public function create(array $data): Task;
    public function update(Task $task, array $data): bool;
    public function delete(Task $task): bool;
    public function getByUser(int $userId): Collection;
    public function getByCategory(int $categoryId): Collection;
    public function getOverdue(): Collection;
    public function getDueToday(): Collection;
    public function getDueTomorrow(): Collection;
    public function getByStatus(string $status): Collection;
    public function getByPriority(string $priority): Collection;
} 