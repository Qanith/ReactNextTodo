import React from 'react';
import TodoItem from './TodoItem';
import styles from '../styles/styles.module.css'

const TodoList = ({ todos, onDelete, onEdit }) => {
    return (
        <div className={styles.todolist}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </div>
    );
};

export default TodoList;
