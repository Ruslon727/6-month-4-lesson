import React, { createContext, useContext, useReducer, useEffect } from 'react';

const TodoContext = createContext();

const initialState = JSON.parse(localStorage.getItem('todos')) || [];

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'EDIT_TODO':
            return state.map(todo => 
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => useContext(TodoContext);
