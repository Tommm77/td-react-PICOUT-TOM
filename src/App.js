import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false, id: Math.random() * 1000 }]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'completed' ? task.completed : filter === 'todo' ? !task.completed : true
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="w-full max-w-md">
        <h1 className="text-xl font-bold text-gray-700 mb-4 text-left">My Tasks</h1>
        <TaskForm addTask={addTask} />
        <div className="mt-6 bg-white shadow-md rounded-lg">
          <div className="p-4 border-b">
            <TaskList tasks={filteredTasks} toggleComplete={toggleComplete} setFilter={setFilter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
