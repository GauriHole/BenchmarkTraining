<?php

namespace App\Exceptions;

use Exception;

class TaskNotFoundException extends Exception
{
    public function __construct($message = 'Task not found')
    {
        parent::__construct($message);
    }
} 