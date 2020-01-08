import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TodoComponents.scss'

export class Todoitem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div className="todoItem">
                <p style={this.getStyle()}>
                    <input type='checkbox' name={title} onChange={this.props.markComplete.bind(this, id)}></input>
                    {title}
                </p>
                <button onClick={this.props.delTodo.bind(this,id)}>x</button>
            </div>
        )
    }
}

// PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem
