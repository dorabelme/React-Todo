import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.updateList(this.state.todo);
        this.setState({ todo: ' ' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        placeholder="Todo"
                        name="todo"
                        value={this.state.todo}
                        onChange={this.handleChange} />
                    <button className="btn add-btn" type="submit">Add Todo</button>
                    <button className="btn clear-btn" onClick={this.props.clearCompletedItems}>Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;

