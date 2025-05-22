<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Notifications\Notification;

class SendTestNotification extends Command
{
    protected $signature = 'notification:test {user_id}';
    protected $description = 'Send a test notification to a user';

    public function handle()
    {
        $userId = $this->argument('user_id');
        $user = User::find($userId);

        if (!$user) {
            $this->error('User not found!');
            return;
        }

        $user->notify(new class extends Notification {
            public function via($notifiable)
            {
                return ['database'];
            }

            public function toArray($notifiable)
            {
                return [
                    'title' => 'Test Notification',
                    'message' => 'This is a test notification to verify the system is working.',
                ];
            }
        });

        $this->info('Test notification sent successfully!');
    }
} 