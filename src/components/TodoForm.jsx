import React, { useState } from 'react';
import { useTodos } from './TodoContext';

const TodoForm = ({ currentTodo, setCurrentTodo }) => {
    const [text, setText] = useState(currentTodo ? currentTodo.text : '');
    const { dispatch } = useTodos();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentTodo) {
            dispatch({ type: 'EDIT_TODO', payload: { id: currentTodo.id, text } });
            setCurrentTodo(null);
        } else {
            dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text } });
        }
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Todo text"
                required
                className="input"
            />
            <button
                type="submit"
                className="button button-add"
            >
                {currentTodo ? 'Edit' : 'Add'} Todo
            </button>
        </form>
    );
};

export default TodoForm;
