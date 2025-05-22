<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    // Fillable attributes
    protected $fillable = [
        'name',
        'email',
        'password',
        'timezone',
        'email_notifications',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'email_notifications' => 'boolean',
    ];

    // Add this method to get unread notifications
    public function unreadNotifications()
    {
        return $this->notifications()->whereNull('read_at');
    }

    // Add this method to get read notifications
    public function readNotifications()
    {
        return $this->notifications()->whereNotNull('read_at');
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function categories()
    {
        return $this->hasMany(TaskCategory::class);
    }

    public function reminders()
    {
        return $this->hasMany(TaskReminder::class);
    }

    public function getDefaultCategory()
    {
        return $this->categories()->where('is_default', true)->first();
    }

}
