<?php

namespace App\Repositories;

use App\Contracts\TaskRepositoryInterface;
use App\Models\Task;
use Illuminate\Database\Eloquent\Collection;

class TaskRepository implements TaskRepositoryInterface
{
    protected $model;

    public function __construct(Task $model)
    {
        $this->model = $model;
    }

    public function all(): Collection
    {
        return $this->model->all();
    }

    public function find(int $id): ?Task
    {
        return $this->model->find($id);
    }

    public function create(array $data): Task
    {
        return $this->model->create($data);
    }

    public function update(Task $task, array $data): bool
    {
        return $task->update($data);
    }

    public function delete(Task $task): bool
    {
        return $task->delete();
    }

    public function getByUser(int $userId): Collection
    {
        return $this->model->where('user_id', $userId)->get();
    }

    public function getByCategory(int $categoryId): Collection
    {
        return $this->model->where('category_id', $categoryId)->get();
    }

    public function getOverdue(): Collection
    {
        return $this->model->overdue()->get();
    }

    public function getDueToday(): Collection
    {
        return $this->model->dueToday()->get();
    }

    public function getDueTomorrow(): Collection
    {
        return $this->model->dueTomorrow()->get();
    }

    public function getByStatus(string $status): Collection
    {
        return $this->model->byStatus($status)->get();
    }

    public function getByPriority(string $priority): Collection
    {
        return $this->model->byPriority($priority)->get();
    }
} 