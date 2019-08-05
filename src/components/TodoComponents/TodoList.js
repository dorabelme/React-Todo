// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) =>{
    const {todos} = props

        return (
            <div className="array-container">
                <h3 className="instr">Todo List:</h3>
                <p className="instr">Click a todo to mark it complete!</p>
                {props.array.map((arrayItem) => <Todo key={arrayItem.id} item={arrayItem} toggleTodo={props.toggleTodo}  />)}
            </div>
        )
    }


export default TodoList;
