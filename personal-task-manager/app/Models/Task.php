<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'category_id',
        'title',
        'description',
        'priority',
        'status',
        'due_date',
        'completed_at',
        'is_recurring',
        'recurrence_pattern',
        'last_reminder_sent_at',
    ];

    protected $casts = [
        'due_date' => 'datetime',
        'completed_at' => 'datetime',
        'last_reminder_sent_at' => 'datetime',
        'is_recurring' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(TaskCategory::class, 'category_id');
    }

    public function reminders()
    {
        return $this->hasMany(TaskReminder::class);
    }

    public function isOverdue()
    {
        return $this->due_date && $this->due_date->isPast() && $this->status !== 'completed';
    }

    public function isDueToday()
    {
        return $this->due_date && $this->due_date->isToday();
    }

    public function isDueTomorrow()
    {
        return $this->due_date && $this->due_date->isTomorrow();
    }

    public function markAsCompleted()
    {
        $this->update([
            'status' => 'completed',
            'completed_at' => now(),
        ]);
    }

    public function markAsInProgress()
    {
        $this->update([
            'status' => 'in_progress',
        ]);
    }

    public function markAsPending()
    {
        $this->update([
            'status' => 'pending',
        ]);
    }

    public function markAsCancelled()
    {
        $this->update([
            'status' => 'cancelled',
        ]);
    }

    public function scopeOverdue($query)
    {
        return $query->where('due_date', '<', now())
            ->where('status', '!=', 'completed');
    }

    public function scopeDueToday($query)
    {
        return $query->whereDate('due_date', now());
    }

    public function scopeDueTomorrow($query)
    {
        return $query->whereDate('due_date', now()->addDay());
    }

    public function scopeByPriority($query, $priority)
    {
        return $query->where('priority', $priority);
    }

    public function scopeByStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    public function scopeByCategory($query, $categoryId)
    {
        return $query->where('category_id', $categoryId);
    }
} 