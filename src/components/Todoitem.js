import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TodoComponents.css'

export class Todoitem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()} className="todoItem">
                <p>
                    <input type='checkbox' name={title} onChange={this.props.markComplete.bind(this, id)}></input>
                    {title}
                </p>
            </div>
        )
    }
}

// PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem
