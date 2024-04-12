import React, { useState } from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);

  const addTask = (content) => {
    if (content.trim() !== "") {
      const newTask = {
        id: todos.length + 1,
        content: content,
        isDone: false
      };
      setTodos([...todos, newTask]);
    }
  };

  const toggleTaskStatus = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTask = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="container">
      <h1>UMC Study Plan</h1>
      <hr className='hr-solid'/>
      <div className="input-section">
        <input type="text" id="todo-input" placeholder="스터디 계획을 작성해보세요!" onKeyPress={(event) => event.key === 'Enter' && addTask(event.target.value)} />
      </div>
      <div className="lists-container">
        <div className="list-column">
          <h3 className='my-underline'>해야 할 일</h3>
          <ul className="todo-list">
            {todos.filter(todo => !todo.isDone).map(todo => (
              <li key={todo.id}>
                {todo.content}
                <button className="clear-btn" onClick={() => toggleTaskStatus(todo.id)}>완료</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="list-column">
          <h3 className='my-underline'>해낸 일</h3>
          <ul className="done-list">
            {todos.filter(todo => todo.isDone).map(todo => (
              <li key={todo.id}>
                {todo.content}
                <button className="delete-btn" onClick={() => deleteTask(todo.id)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
