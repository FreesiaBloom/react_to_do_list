import React, { Component } from 'react'
import { MdArrowForward } from "react-icons/md";

export class AddTodo extends Component {
    render() {
        return (
            <form className="AddTodoForm">
                <div className="AddTodoInput">        
                    <label for="title">Add Todo</label>
                    <input type="text" name="title"></input>
                </div>
                <div className="btnSubmit">
                    <button type="submit" >Submit <MdArrowForward /></button>
                </div>
            </form>
        )
    }
}

export default AddTodo
