import React, { Component } from 'react';
// import Todo from './Todo';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            searchedTodo: ''
        };
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.updateSearchedtodo(this.state.searchedTodo)
        // this.props.updateList(this.state.todo);
        // this.setState({ todo: ' ' });
    }

    render() {
        const { searchedTodo } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        icon="search"
                        placeholder="Search"
                        name="searchedTodo"
                        value={searchedTodo}
                        onChange={this.handleChange} />
                    <button className="btn add-btn" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;
