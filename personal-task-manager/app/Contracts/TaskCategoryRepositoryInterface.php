<?php

namespace App\Contracts;

use App\Models\TaskCategory;
use Illuminate\Database\Eloquent\Collection;

interface TaskCategoryRepositoryInterface
{
    public function all(): Collection;
    public function find(int $id): ?TaskCategory;
    public function create(array $data): TaskCategory;
    public function update(TaskCategory $category, array $data): bool;
    public function delete(TaskCategory $category): bool;
    public function getByUser(int $userId): Collection;
    public function getWithTaskCount(int $userId): Collection;
} 