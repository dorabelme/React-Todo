import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.scss';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoListData: []
    };
  }
  
  updateList = event => {
    // const copyList = this.state.todoListData.slice();
    const newTodo = {
      todo: event,
      id: Date.now(),
      completed: false
    };
    // copyList.push(newTodo);
    this.setState({
      todoListData: [...this.state.todoListData, newTodo]
    })
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleTodo = id => {
    this.setState({
      todoListData: this.state.todoListData.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };

  clearCompletedItems = event => {
    event.preventDefault();
    const filteredTodoList = this.state.todoListData.filter((item) => item.completed != true)
    this.setState({ todoListData: filteredTodoList })
  }

  
  render() {
    return (
      <div className="app-container">
        <h2>Welcome to your Todo App!</h2>
        <TodoList array={this.state.todoListData} toggleTodo={this.toggleTodo} />
        <TodoForm updateList={this.updateList} clearCompletedItems={this.clearCompletedItems} />
      </div>
    );
  }
}

export default App;
