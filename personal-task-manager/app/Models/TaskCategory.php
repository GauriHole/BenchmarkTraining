<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TaskCategory extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'name',
        'color',
        'description',
        'is_default',
    ];

    protected $casts = [
        'is_default' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class, 'category_id');
    }

    public function getTaskCount()
    {
        return $this->tasks()->count();
    }

    public function getCompletedTaskCount()
    {
        return $this->tasks()->where('status', 'completed')->count();
    }

    public function getPendingTaskCount()
    {
        return $this->tasks()->where('status', 'pending')->count();
    }

    public function getInProgressTaskCount()
    {
        return $this->tasks()->where('status', 'in_progress')->count();
    }
}