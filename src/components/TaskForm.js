import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputText);
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex justify-between gap-3">
      <input
        className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a task..."
      />
      <button
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;
