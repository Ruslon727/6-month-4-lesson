import React from 'react';
import { TodoProvider } from './components/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
    return (
        <TodoProvider>
            <div className="container">
                <h1>Todo List</h1>
                <TodoForm/>
                <TodoList />
            </div>
        </TodoProvider>
    );
};

export default App;
