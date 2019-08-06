import React from 'react';

const Todo = (props) => {

    return (
        <div className="todo-item">
            <h4 className={`items${props.item.completed ? ' completed' : ''}`}
                onClick={() => props.toggleTodo(props.item.id)}>{props.item.todo}</h4>
        </div>
    )
}


export default Todo;
