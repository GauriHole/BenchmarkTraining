<?php

namespace App\Repositories;

use App\Contracts\TaskCategoryRepositoryInterface;
use App\Models\TaskCategory;
use Illuminate\Database\Eloquent\Collection;

class TaskCategoryRepository implements TaskCategoryRepositoryInterface
{
    protected $model;

    public function __construct(TaskCategory $model)
    {
        $this->model = $model;
    }

    public function all(): Collection
    {
        return $this->model->all();
    }

    public function find(int $id): ?TaskCategory
    {
        return $this->model->find($id);
    }

    public function create(array $data): TaskCategory
    {
        return $this->model->create($data);
    }

    public function update(TaskCategory $category, array $data): bool
    {
        return $category->update($data);
    }

    public function delete(TaskCategory $category): bool
    {
        return $category->delete();
    }

    public function getByUser(int $userId): Collection
    {
        return $this->model->where('user_id', $userId)->get();
    }

    public function getWithTaskCount(int $userId): Collection
    {
        return $this->model->where('user_id', $userId)
            ->withCount('tasks')
            ->get();
    }
} 