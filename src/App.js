import React, { Component } from 'react';
import './App.scss';
import Todos from './components/Todos';
import Header from './components/layout/Header'

class App extends Component {
  state = {
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
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    )
  };
}

export default App;
