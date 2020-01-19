import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './styling/appStyle.scss';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import NavbarNavigation from './components/layout/NavbarNavigation';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { MdAdd } from "react-icons/md";
import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: '',
      opened: true,
      todos: [
        {
          id: uuid.v4(),
          title: 'Go for a walk',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Go to a doctor',
          completed: true
        },
        {
          id: uuid.v4(),
          title: 'Do shopping',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Pet a dog',
          completed: true
        }
      ]
    };
    this.openAddTodoComponent = this.openAddTodoComponent.bind(this);
  }

  openAddTodoComponent() {
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

  addTodo = (title, date, time) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false,
    }
    this.setState( {
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    const { opened } = this.state;
    return (
      <Router>
        <div className="App">
          <NavbarNavigation />
          <div className="container">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Header pageTitle={'Todo List'}/>
                {/* List of todo items */}
                <div className="TodoList">
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                  <div className="AddTodoBtn">
                    {/* MsAdd is a plus icon */}
                    <button onClick={this.openAddTodoComponent}><MdAdd /></button>
                  </div>
                </div>

                {/* Add new todo items triggered by 'opened' boolean */}
                {opened && (
                  <div className="AddTodo">
                    <AddTodo addTodo={this.addTodo}/>
                  </div>
                )}
              </React.Fragment>
            )} />
            <Route path="/about" component={About}>
              <Header pageTitle={'About'}></Header>
              <About />
            </Route>
          </div>
        </div>
      </Router>
    )
  };
}

export default App;
