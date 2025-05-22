<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Enums\TaskStatusEnum;

class TaskRequest extends FormRequest
{
    public function authorize()
    {
        // You can add authorization logic here if needed
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|in:' . implode(',', TaskStatusEnum::values()),
            'due_date' => 'nullable|date',
        ];
    }
} 