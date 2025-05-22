<?php

namespace App\Http\Controllers;

use App\Models\TaskCategory;
use Illuminate\Http\Request;
use App\Traits\ApiResponseTrait;

class TaskCategoryController extends Controller
{
    use ApiResponseTrait;

    public function index(Request $request)
    {
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'User not authenticated'], 401);
        }

        $categories = $user->categories()->orderBy('name')->get();
        return response()->json(['categories' => $categories, 'message' => 'Categories fetched successfully']);
    }

    public function store(Request $request)
    {
        \Log::info('Creating category', ['request' => $request->all()]);
        
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'color' => 'required|string|max:7',
                'description' => 'nullable|string',
                'is_default' => 'boolean',
            ]);

            $category = $request->user()->categories()->create($request->all());
            \Log::info('Category created successfully', ['category' => $category]);
            
            return response()->json([
                'category' => $category,
                'message' => 'Category created successfully'
            ], 201);
        } catch (\Exception $e) {
            \Log::error('Failed to create category', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            return response()->json([
                'message' => 'Failed to create category: ' . $e->getMessage()
            ], 500);
        }
    }

    public function show(TaskCategory $category)
    {
        $this->authorize('view', $category);
        return $this->success($category, 'Category fetched successfully');
    }

    public function update(Request $request, TaskCategory $category)
    {
        $this->authorize('update', $category);

        $request->validate([
            'name' => 'required|string|max:255',
            'color' => 'required|string|max:7',
            'description' => 'nullable|string',
            'is_default' => 'boolean',
        ]);

        $category->update($request->all());
        return $this->success($category, 'Category updated successfully');
    }

    public function destroy(TaskCategory $category)
    {
        $this->authorize('delete', $category);
        $category->delete();
        return $this->success(null, 'Category deleted successfully', 204);
    }
}