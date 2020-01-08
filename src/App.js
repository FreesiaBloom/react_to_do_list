import React, { Component } from 'react';
import './App.scss';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import { MdAdd } from "react-icons/md";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true,
      todos: [
        {
          id: 1,
          title: 'Go for a walk',
          completed: false
        },
        {
          id: 2,
          title: 'Go to a doctor',
          completed: true
        },
        {
          id: 3,
          title: 'Do shopping',
          completed: false
        },
        {
          id: 4,
          title: 'Pet a dog',
          completed: true
        }
      ]
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;

    this.setState({
      opened: !opened,
    });
  }

  //Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  //Delete todo
  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => todo.id !== id)
      ]
    });

  }

  render() {
    const { opened } = this.state;
    return (
      <div className="App">
        <div className="container">

          <Header />
          <div className="TodoList">
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            <div className="AddTodoBtn">
              <button onClick={this.toggleBox}><MdAdd /></button>
            </div>
          </div>
          {opened && (
            <div className="AddTodo">
              <AddTodo />
            </div>
          )}

        </div>
      </div>
    )
  };
}

export default App;
