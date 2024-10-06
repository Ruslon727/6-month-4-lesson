import React, { useState } from 'react';
import { useTodos } from './TodoContext';
import Modal from './Modal';
import TodoForm from './TodoForm';

const TodoList = () => {
    const { todos, dispatch } = useTodos();
    const [isOpen, setIsOpen] = useState(false);
    const [currentTodo, setCurrentTodo] = useState(null);

    const openModal = (todo) => {
        setCurrentTodo(todo);
        setIsOpen(true);
    };

    const closeModal = () => {
        setCurrentTodo(null);
        setIsOpen(false);
    };

    return (
        <>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className="todo-item">
                        <span className="todo-text">{todo.text}</span>
                        <div>
                            <button
                                onClick={() => openModal(todo)}
                                className="button button-edit"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                                className="button button-delete"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <Modal isOpen={isOpen} onClose={closeModal}>
                <TodoForm currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
            </Modal>
        </>
    );
};

export default TodoList;
