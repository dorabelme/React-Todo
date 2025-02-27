// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) =>{
        return (
            <div className="array-container">
                <h3>Todo List:</h3>
                <p>Click a todo to mark it complete!</p>
                {props.array.map((arrayItem) => <Todo key={arrayItem.id} item={arrayItem} toggleTodo={props.toggleTodo} />)}
                {console.log(props.array)}
            </div>
        )
    }


export default TodoList;
