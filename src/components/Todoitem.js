import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styling/todoComponentsStyle.scss';
import { IoIosRemoveCircleOutline, IoMdRemoveCircle } from "react-icons/io";

export class Todoitem extends Component {
    getLineThroughStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div className="todoItem">
                <p >
                    <label>
                        <input type='checkbox' name={title} id="test1" onChange={this.props.markComplete.bind(this, id)} defaultChecked={this.props.markComplete}></input>
                        <span style={this.getLineThroughStyle()}>{title}</span>
                    </label>
                </p>
                <button onClick={this.props.delTodo.bind(this, id)}>Delete <IoIosRemoveCircleOutline className="icon iconNotHover" /><IoMdRemoveCircle className="icon iconHover" /></button>
            </div>
        )
    }
}

// PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem
