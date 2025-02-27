import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import SearchForm from './components/TodoComponents/SearchForm';

import './components/TodoComponents/Todo.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    // this.localStorageKey = 'todo-state';
    // this.state = { todoListData: [], searchedTodo: '', ...(JSON.parse(window.localStorage.getItem(this.localStorageKey)) || {}) };
    this.state = {
      todoListData: [],
      searchedTodo: ''
    };
  }
  
  // componentDidMount() {
  //   window.addEventListener(
  //     "beforeunload",
  //     () => window.localStorage.setItem(this.localStorageKey, JSON.stringify(this.state))
  //   );
  // }

  updateList = event => {
    const newTodo = {
      todo: event,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoListData: [...this.state.todoListData, newTodo]
    })
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateSearchedtodo = (string) => {
    this.setState({searchedTodo : string})
  }

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
        <SearchForm updateSearchedtodo={this.updateSearchedtodo} />
        <TodoList array={this.state.todoListData.filter(item => item.todo.includes(this.state.searchedTodo))} toggleTodo={this.toggleTodo} />
        <TodoForm updateList={this.updateList} clearCompletedItems={this.clearCompletedItems} />
      </div>
    );
  }
}

export default App;
