import React from 'react';
import { Link } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

export default function AddTask() {
  const handleSubmit = async (data) => {
    await fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-primary-600">Task Manager</h1>
            <Link
              to="/"
              className="text-primary-600 hover:text-primary-800"
            >
              Back to Tasks
            </Link>
          </div>
        </div>
      </nav>
      
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between mb-6">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Add New Task
            </h2>
          </div>
        </div>
        
        <TaskForm onSubmit={handleSubmit} />
      </main>
    </div>
  );
}