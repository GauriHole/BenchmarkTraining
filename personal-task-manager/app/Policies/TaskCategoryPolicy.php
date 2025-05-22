<?php

namespace App\Policies;

use App\Models\TaskCategory;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TaskCategoryPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        return true;
    }

    public function view(User $user, TaskCategory $category)
    {
        return $user->id === $category->user_id;
    }

    public function create(User $user)
    {
        return true;
    }

    public function update(User $user, TaskCategory $category)
    {
        return $user->id === $category->user_id;
    }

    public function delete(User $user, TaskCategory $category)
    {
        return $user->id === $category->user_id;
    }

    public function restore(User $user, TaskCategory $category)
    {
        return $user->id === $category->user_id;
    }

    public function forceDelete(User $user, TaskCategory $category)
    {
        return $user->id === $category->user_id;
    }
} 