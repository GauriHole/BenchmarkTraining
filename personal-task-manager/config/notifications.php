<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Notification Channels
    |--------------------------------------------------------------------------
    |
    | This file contains the notification channels that your application
    | supports. You can add additional channels as needed.
    |
    */

    'channels' => [
        'mail' => [
            'driver' => 'smtp',
            'host' => env('MAIL_HOST', '127.0.0.1'),
            'port' => env('MAIL_PORT', 2525),
            'encryption' => env('MAIL_ENCRYPTION', 'tls'),
            'username' => env('MAIL_USERNAME'),
            'password' => env('MAIL_PASSWORD'),
            'from' => [
                'address' => env('MAIL_FROM_ADDRESS', 'hello@example.com'),
                'name' => env('MAIL_FROM_NAME', '${APP_NAME}'),
            ],
        ],
        'database' => [
            'table' => 'notifications',
        ],
    ],
]; 