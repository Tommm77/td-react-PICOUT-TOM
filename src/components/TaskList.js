import React from 'react';

function Task({ task, toggleComplete }) {
  return (
    <div className={`flex items-center mb-2 justify-between p-2 ${task.completed ? 'bg-green-100' : 'bg-gray-100'} rounded-md`}>
      <span className={`flex-1 ${task.completed ? 'line-through' : ''}`} onClick={() => toggleComplete(task.id)}>
        {task.text}
      </span>
    </div>
  );
}

function TaskList({ tasks, toggleComplete, setFilter }) {
  return (
    <div>
      <div className="flex justify-around my-4">
        <button onClick={() => setFilter('all')} className="btn text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">All</button>
        <button onClick={() => setFilter('completed')} className="btn text-sm bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Completed</button>
        <button onClick={() => setFilter('todo')} className="btn text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">To Do</button>
      </div>

      <div>
        {tasks.map(task => (
          <Task key={task.id} task={task} toggleComplete={toggleComplete} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
