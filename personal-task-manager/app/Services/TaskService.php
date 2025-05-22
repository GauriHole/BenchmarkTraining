<?php

namespace App\Services;

use App\Contracts\TaskRepositoryInterface;
use App\Contracts\TaskServiceInterface;
use App\Contracts\NotificationServiceInterface;
use App\Models\Task;
use Illuminate\Database\Eloquent\Collection;

class TaskService implements TaskServiceInterface
{
    protected $taskRepository;
    protected $notificationService;

    public function __construct(
        TaskRepositoryInterface $taskRepository,
        NotificationServiceInterface $notificationService
    ) {
        $this->taskRepository = $taskRepository;
        $this->notificationService = $notificationService;
    }

    public function getAllTasks(): Collection
    {
        return $this->taskRepository->all();
    }

    public function getTaskById(int $id): ?Task
    {
        return $this->taskRepository->find($id);
    }

    public function createTask(array $data): Task
    {
        $task = $this->taskRepository->create($data);
        
        if (isset($data['user_id'])) {
            $this->notificationService->notifyTaskAssigned($task, $task->user);
        }

        return $task;
    }

    public function updateTask(Task $task, array $data): bool
    {
        $oldStatus = $task->status;
        $oldPriority = $task->priority;
        $oldDueDate = $task->due_date;

        $updated = $this->taskRepository->update($task, $data);

        if ($updated) {
            if (isset($data['status']) && $data['status'] !== $oldStatus) {
                $this->notificationService->notifyTaskStatusChanged($task, $oldStatus);
            }

            if (isset($data['priority']) && $data['priority'] !== $oldPriority) {
                $this->notificationService->notifyTaskPriorityChanged($task, $oldPriority);
            }

            if (isset($data['due_date']) && $data['due_date'] !== $oldDueDate) {
                $this->notificationService->notifyTaskDueDateChanged($task, $oldDueDate);
            }
        }

        return $updated;
    }

    public function deleteTask(Task $task): bool
    {
        return $this->taskRepository->delete($task);
    }

    public function getUserTasks(int $userId): Collection
    {
        return $this->taskRepository->getByUser($userId);
    }

    public function getCategoryTasks(int $categoryId): Collection
    {
        return $this->taskRepository->getByCategory($categoryId);
    }

    public function getOverdueTasks(): Collection
    {
        return $this->taskRepository->getOverdue();
    }

    public function getDueTodayTasks(): Collection
    {
        return $this->taskRepository->getDueToday();
    }

    public function getDueTomorrowTasks(): Collection
    {
        return $this->taskRepository->getDueTomorrow();
    }

    public function getTasksByStatus(string $status): Collection
    {
        return $this->taskRepository->getByStatus($status);
    }

    public function getTasksByPriority(string $priority): Collection
    {
        return $this->taskRepository->getByPriority($priority);
    }

    public function markTaskAsComplete(Task $task): bool
    {
        $updated = $this->taskRepository->update($task, [
            'status' => 'completed',
            'completed_at' => now(),
        ]);

        if ($updated) {
            $this->notificationService->notifyTaskCompleted($task);
        }

        return $updated;
    }

    public function markTaskAsIncomplete(Task $task): bool
    {
        return $this->taskRepository->update($task, [
            'status' => 'pending',
            'completed_at' => null,
        ]);
    }

    public function updateTaskPriority(Task $task, string $priority): bool
    {
        return $this->taskRepository->update($task, ['priority' => $priority]);
    }

    public function updateTaskStatus(Task $task, string $status): bool
    {
        return $this->taskRepository->update($task, ['status' => $status]);
    }

    public function updateTaskDueDate(Task $task, string $dueDate): bool
    {
        return $this->taskRepository->update($task, ['due_date' => $dueDate]);
    }

    public function assignTaskToUser(Task $task, int $userId): bool
    {
        $updated = $this->taskRepository->update($task, ['user_id' => $userId]);
        
        if ($updated) {
            $this->notificationService->sendTaskAssignedNotification($task, $task->user);
        }

        return $updated;
    }

    public function addTaskToCategory(Task $task, int $categoryId): bool
    {
        return $this->taskRepository->update($task, ['category_id' => $categoryId]);
    }
} 