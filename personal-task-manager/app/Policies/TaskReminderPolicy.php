<?php

namespace App\Policies;

use App\Models\TaskReminder;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TaskReminderPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        return true;
    }

    public function view(User $user, TaskReminder $reminder)
    {
        return $user->id === $reminder->user_id;
    }

    public function create(User $user)
    {
        return true;
    }

    public function update(User $user, TaskReminder $reminder)
    {
        return $user->id === $reminder->user_id;
    }

    public function delete(User $user, TaskReminder $reminder)
    {
        return $user->id === $reminder->user_id;
    }

    public function restore(User $user, TaskReminder $reminder)
    {
        return $user->id === $reminder->user_id;
    }

    public function forceDelete(User $user, TaskReminder $reminder)
    {
        return $user->id === $reminder->user_id;
    }
} 