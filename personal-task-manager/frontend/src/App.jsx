//src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import { TaskProvider } from './context/TaskContext';
import DebugSession from './pages/DebugSession';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/debug-session" element={<DebugSession />} />
      </Routes>
    </TaskProvider>
  );
}

export default App;