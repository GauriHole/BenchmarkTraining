import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTask } from '../context/TaskContext';
import axiosClient from '../api/axios';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import NotificationList from '../components/NotificationList';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function TaskStatusChart({ data }) {
  return (
    <div className="w-1/2 mx-auto">
      <Pie data={data} />
    </div>
  );
}

function Home() {
  const { user } = useAuth();
  const {
    tasks,
    pagination,
    loading,
    error,
    fetchTasks,
    createTask,
    deleteTask,
    updateTask,
    setTasks,
  } = useTask();
  const navigate = useNavigate();

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'pending',
    due_date: '',
    category_id: '',
  });

  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [createdDateFilter, setCreatedDateFilter] = useState('');
  const [dueDateFilter, setDueDateFilter] = useState('');

  const [editingTaskId, setEditingTaskId] = useState(null); // Track the task being edited
  const [editingTask, setEditingTask] = useState(null); // Store the task's editable details

  const [showNewCategoryForm, setShowNewCategoryForm] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: '',
    color: '#3B82F6' // Default blue color
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user) {
      fetchTasks(); // Fetch tasks for the first page
      fetchCategories(); // Fetch categories
    }
  }, [user]);

  const fetchCategories = async () => {
    try {
      const { data } = await axiosClient.get('/categories');
      setCategories(data.categories);
    } catch (err) {
      console.error('Failed to fetch categories:', err.response?.data || err.message);
    }
  };

  const handleCreateTask = async () => {
    try {
      await createTask(newTask);
      setNewTask({ title: '', description: '', status: 'pending', due_date: '', category_id: '' });
    } catch (err) {
      console.error('Failed to create task:', err.response?.data || err.message);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
    } catch (err) {
      console.error('Failed to delete task:', err.response?.data || err.message);
    }
  };

  const handlePageChange = (page) => {
    fetchTasks(page); // Fetch tasks for the selected page
  };

  const handleEditClick = (task) => {
    setEditingTaskId(task.id); // Set the task ID being edited
    setEditingTask({ ...task }); // Copy the task details into the editing state
  };

  const handleEditChange = (field, value) => {
    setEditingTask((prev) => ({ ...prev, [field]: value })); // Update the editing state
  };

  const handleEditSave = async () => {
    if (editingTaskId && editingTask) {
      try {
        await updateTask(editingTaskId, editingTask); // Save the updated task
        setEditingTaskId(null); // Exit edit mode
        setEditingTask(null); // Clear the editing state
      } catch (err) {
        console.error('Failed to update task:', err.response?.data || err.message);
      }
    }
  };

  const handleEditCancel = () => {
    setEditingTaskId(null); // Exit edit mode
    setEditingTask(null); // Clear the editing state
  };

  const handleCreateCategory = async () => {
    try {
      if (!newCategory.name.trim()) {
        alert('Please enter a category name');
        return;
      }

      const response = await axiosClient.post('/categories', newCategory);
      if (response.data && response.data.category) {
        setCategories(prevCategories => [...prevCategories, response.data.category]);
        setNewTask(prev => ({ ...prev, category_id: response.data.category.id }));
        setShowNewCategoryForm(false);
        setNewCategory({ name: '', description: '', color: '#3B82F6' });
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (err) {
      console.error('Failed to create category:', err.response?.data || err.message);
      alert('Failed to create category. Please try again.');
    }
  };

  const filteredTasks = (tasks || []).filter((task) => {
    const matchesCategory = !selectedCategory || task.category_id === parseInt(selectedCategory, 10);
    const matchesStatus = !selectedStatus || task.status === selectedStatus;
    const matchesSearch = !searchQuery || (task.title && task.title.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCreatedDate = !createdDateFilter || (task.created_at && task.created_at.split('T')[0] === createdDateFilter);
    const matchesDueDate = !dueDateFilter || (task.due_date && task.due_date === dueDateFilter);

    return matchesCategory && matchesStatus && matchesSearch && matchesCreatedDate && matchesDueDate;
  });

  // Chart Data
  const completedTasks = tasks.filter((task) => task.status === 'completed').length;
  const inProgressTasks = tasks.filter((task) => task.status === 'in_progress').length;
  const pendingTasks = tasks.filter((task) => task.status === 'pending').length;

  const chartData = {
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [
      {
        data: [completedTasks, inProgressTasks, pendingTasks],
        backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-[1920px] mx-auto px-1 py-3 sm:px-2 lg:px-3">
        <div className="px-1 py-3 sm:px-2">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                <div className="p-3 bg-white border-b border-gray-200">
                  <h1 className="text-2xl font-semibold text-gray-900">Welcome, {user?.name}!</h1>
                  <p className="mt-1 text-gray-600">This is your personal task management dashboard.</p>

                  {/* Chart */}
                  <div className="mt-4">
                    <div className="w-[70%] ml-auto">
                    <h2 className="text-lg font-medium text-gray-900">Task Status Overview</h2>

                      <TaskStatusChart data={chartData} />
                    </div>
                  </div>

                  {/* Filters Section */}
                  <div className="mt-4 bg-white rounded-lg shadow p-3">
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Task Filters</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {/* Search by Task Name */}
                      <div className="flex flex-col">
                        <label htmlFor="search" className="text-sm font-medium text-gray-700 mb-1">
                          Search Tasks
                        </label>
                        <input
                          id="search"
                          type="text"
                          placeholder="Search by task name..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      {/* Filter by Category */}
                      <div className="flex flex-col">
                        <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-1">
                          Category
                        </label>
                        <select
                          id="category"
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">All Categories</option>
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Filter by Status */}
                      <div className="flex flex-col">
                        <label htmlFor="status" className="text-sm font-medium text-gray-700 mb-1">
                          Status
                        </label>
                        <select
                          id="status"
                          value={selectedStatus}
                          onChange={(e) => setSelectedStatus(e.target.value)}
                          className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">All Statuses</option>
                          <option value="pending">Pending</option>
                          <option value="in_progress">In Progress</option>
                          <option value="completed">Completed</option>
                        </select>
                      </div>

                      {/* Filter by Created Date */}
                      <div className="flex flex-col">
                        <label htmlFor="createdDate" className="text-sm font-medium text-gray-700 mb-1">
                          Created Date
                        </label>
                        <input
                          id="createdDate"
                          type="date"
                          value={createdDateFilter}
                          onChange={(e) => setCreatedDateFilter(e.target.value)}
                          className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      {/* Filter by Due Date */}
                      <div className="flex flex-col">
                        <label htmlFor="dueDate" className="text-sm font-medium text-gray-700 mb-1">
                          Due Date
                        </label>
                        <input
                          id="dueDate"
                          type="date"
                          value={dueDateFilter}
                          onChange={(e) => setDueDateFilter(e.target.value)}
                          className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      {/* Clear Filters Button */}
                      <div className="flex items-end">
                        <button
                          onClick={() => {
                            setSearchQuery('');
                            setSelectedCategory('');
                            setSelectedStatus('');
                            setCreatedDateFilter('');
                            setDueDateFilter('');
                          }}
                          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors duration-200"
                        >
                          Clear Filters
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Add Task Form */}
                  <div className="mt-4">
                    <h2 className="text-lg font-medium text-gray-900 mb-3">Add New Task</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Task Name"
                        value={newTask.title}
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                        className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      
                      {/* Category Selection with New Category Option */}
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <select
                            value={newTask.category_id}
                            onChange={(e) => {
                              if (e.target.value === 'new') {
                                setShowNewCategoryForm(true);
                              } else {
                                setNewTask({ ...newTask, category_id: e.target.value });
                              }
                            }}
                            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-grow"
                          >
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                            <option value="new">+ Add New Category</option>
                          </select>
                        </div>

                        {/* New Category Form */}
                        {showNewCategoryForm && (
                          <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                            <h3 className="text-sm font-medium text-gray-700 mb-2">Create New Category</h3>
                            <div className="space-y-2">
                              <input
                                type="text"
                                placeholder="Category Name"
                                value={newCategory.name}
                                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                              <textarea
                                placeholder="Category Description (optional)"
                                value={newCategory.description}
                                onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                              <div className="flex items-center space-x-2">
                                <label className="text-sm text-gray-600">Color:</label>
                                <input
                                  type="color"
                                  value={newCategory.color}
                                  onChange={(e) => setNewCategory({ ...newCategory, color: e.target.value })}
                                  className="h-8 w-8 rounded cursor-pointer"
                                />
                              </div>
                              <div className="flex space-x-2">
                                <button
                                  onClick={handleCreateCategory}
                                  className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                                >
                                  Create Category
                                </button>
                                <button
                                  onClick={() => {
                                    setShowNewCategoryForm(false);
                                    setNewCategory({ name: '', description: '', color: '#3B82F6' });
                                  }}
                                  className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-300 transition-colors"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <textarea
                        placeholder="Description"
                        value={newTask.description}
                        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                        className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <input
                        type="date"
                        placeholder="Due Date"
                        value={newTask.due_date}
                        onChange={(e) => setNewTask({ ...newTask, due_date: e.target.value })}
                        className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        onClick={handleCreateTask}
                        className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                      >
                        Add Task
                      </button>
                    </div>
                  </div>

                  {/* Task List */}
                  <div className="mt-4 grid grid-cols-1 gap-3">
                    {filteredTasks.map((task) => (
                      <div key={task.id} className="bg-white shadow rounded p-3">
                        {editingTaskId === task.id ? (
                          <div>
                            <input
                              type="text"
                              value={editingTask.title}
                              onChange={(e) => handleEditChange('title', e.target.value)}
                              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <textarea
                              value={editingTask.description}
                              onChange={(e) => handleEditChange('description', e.target.value)}
                              className="border border-gray-300 rounded-md px-3 py-2 w-full mt-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <select
                              value={editingTask.status}
                              onChange={(e) => handleEditChange('status', e.target.value)}
                              className="border border-gray-300 rounded-md px-3 py-2 w-full mt-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="pending">Pending</option>
                              <option value="in_progress">In Progress</option>
                              <option value="completed">Completed</option>
                            </select>
                            <input
                              type="date"
                              value={editingTask.due_date}
                              onChange={(e) => handleEditChange('due_date', e.target.value)}
                              className="border border-gray-300 rounded-md px-3 py-2 w-full mt-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="mt-2 flex space-x-2">
                              <button
                                onClick={handleEditSave}
                                className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition-colors"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleEditCancel}
                                className="bg-gray-500 text-white px-3 py-2 rounded-md hover:bg-gray-600 transition-colors"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
                            <p className="text-sm text-gray-600">{task.description}</p>
                            <p className="text-sm text-gray-500">
                              Category: {categories.find((cat) => cat?.id === task.category_id)?.name || 'None'}
                            </p>
                            <p className="text-sm text-gray-500">Created At: {task.created_at}</p>
                            <p className="text-sm text-gray-500">Due Date: {task.due_date}</p>
                            <div className="mt-2 flex space-x-2">
                              <button
                                onClick={() => handleEditClick(task)}
                                className="bg-yellow-500 text-white px-3 py-2 rounded-md hover:bg-yellow-600 transition-colors"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteTask(task.id)}
                                className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="mt-4 flex justify-center space-x-2">
                    {Array.from({ length: pagination.lastPage || 1 }, (_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-3 py-2 rounded-md ${
                          pagination.currentPage === index + 1
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        } transition-colors`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications sidebar */}
            <div className="lg:col-span-1">
              <NotificationList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
