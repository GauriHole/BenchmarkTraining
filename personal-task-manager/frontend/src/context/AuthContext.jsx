import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosClient from '../api/axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        console.log('Token:', token); // Debugging
        const { data } = await axiosClient.get('/user'); // Correct endpoint
        setUser(data);
      } catch (err) {
        console.error('Failed to fetch user:', err.response?.data || err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (credentials) => {
    try {
      console.log('Login credentials:', credentials); // Debugging
      const { data } = await axiosClient.post('/login', credentials);
      localStorage.setItem('token', data.token); // Store the token in localStorage
      setUser(data.user); // Set the authenticated user
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
    }
  };

  const logout = async () => {
    try {
      console.log('Sending logout request...');
      await axiosClient.post('/logout'); // Correct endpoint
      localStorage.removeItem('token'); // Remove token from localStorage
      setUser(null); // Clear the user state
    } catch (error) {
      console.error('Logout failed:', error.response?.data || error.message);
    }
  };

  const isAuthenticated = () => !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}