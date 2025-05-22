<?php

namespace App\Facades;

class ReminderHelper
{
    public static function isDueSoon($dueDate, $hours = 1)
    {
        if (!$dueDate) return false;
        $now = now();
        return $now->diffInHours($dueDate, false) <= $hours && $now->lessThan($dueDate);
    }

    public static function isOverdue($dueDate)
    {
        if (!$dueDate) return false;
        return now()->greaterThan($dueDate);
    }
} 