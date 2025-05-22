<?php

namespace App\Services;

use App\Contracts\TaskCategoryServiceInterface;
use App\Contracts\TaskCategoryRepositoryInterface;
use App\Models\TaskCategory;
use Illuminate\Database\Eloquent\Collection;

class TaskCategoryService implements TaskCategoryServiceInterface
{
    protected $taskCategoryRepository;

    public function __construct(TaskCategoryRepositoryInterface $taskCategoryRepository)
    {
        $this->taskCategoryRepository = $taskCategoryRepository;
    }

    public function getAllCategories(): Collection
    {
        return $this->taskCategoryRepository->all();
    }

    public function getCategoryById(int $id): ?TaskCategory
    {
        return $this->taskCategoryRepository->find($id);
    }

    public function createCategory(array $data): TaskCategory
    {
        return $this->taskCategoryRepository->create($data);
    }

    public function updateCategory(int $id, array $data): ?TaskCategory
    {
        return $this->taskCategoryRepository->update($id, $data);
    }

    public function deleteCategory(int $id): bool
    {
        return $this->taskCategoryRepository->delete($id);
    }
} 