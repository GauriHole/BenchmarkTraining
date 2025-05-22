import React, { createContext, useContext, useState } from 'react';
import axiosClient from '../api/axios';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = async (page = 1) => {
    setLoading(true);
    try {
      const { data } = await axiosClient.get(`/tasks?page=${page}`);
      setTasks(data.data);
      setPagination({
        currentPage: data.current_page,
        lastPage: data.last_page,
        total: data.total,
      });
    } catch (err) {
      console.error('Failed to fetch tasks:', err.response?.data || err.message);
      setError('Failed to fetch tasks.');
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (newTask) => {
    try {
      const { data } = await axiosClient.post('/tasks', newTask);
      setTasks((prevTasks) => [data, ...prevTasks]);
    } catch (err) {
      console.error('Failed to create task:', err.response?.data || err.message);
      setError('Failed to create task.');
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axiosClient.delete(`/tasks/${taskId}`); // Remove the extra '/api'
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (err) {
      console.error('Failed to delete task:', err.response?.data || err.message);
      setError('Failed to delete task.');
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const { data } = await axiosClient.put(`/tasks/${id}`, updatedTask); // Correct endpoint
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? data.task : task))
      );
      return data.task;
    } catch (error) {
      console.error('Failed to update task:', error.response?.data || error.message);
      throw error;
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        pagination,
        loading,
        error,
        fetchTasks,
        createTask,
        deleteTask,
        updateTask,
        setTasks,
        setPagination,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  return useContext(TaskContext);
}
