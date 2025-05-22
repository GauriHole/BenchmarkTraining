<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskReminder extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_id',
        'user_id',
        'reminder_at',
        'is_sent',
        'sent_at',
        'reminder_message',
    ];

    protected $casts = [
        'reminder_at' => 'datetime',
        'sent_at' => 'datetime',
        'is_sent' => 'boolean',
    ];

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function markAsSent()
    {
        $this->update([
            'is_sent' => true,
            'sent_at' => now(),
        ]);
    }

    public function isOverdue()
    {
        return $this->reminder_at->isPast() && !$this->is_sent;
    }

    public function scopePending($query)
    {
        return $query->where('is_sent', false)
            ->where('reminder_at', '<=', now());
    }

    public function scopeUpcoming($query)
    {
        return $query->where('is_sent', false)
            ->where('reminder_at', '>', now());
    }
} 