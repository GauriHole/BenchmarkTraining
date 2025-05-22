<?php

namespace App\Contracts;

use App\Models\TaskCategory;
use Illuminate\Database\Eloquent\Collection;

interface TaskCategoryServiceInterface
{
    public function getAllCategories(): Collection;
    public function getCategoryById(int $id): ?TaskCategory;
    public function createCategory(array $data): TaskCategory;
    public function updateCategory(TaskCategory $category, array $data): bool;
    public function deleteCategory(TaskCategory $category): bool;
    public function getUserCategories(int $userId): Collection;
    public function getCategoriesWithTaskCount(int $userId): Collection;
    public function validateCategoryName(string $name): bool;
    public function checkCategoryExists(string $name, int $userId): bool;
} 