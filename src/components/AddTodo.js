import React, { Component } from 'react'
import { MdArrowForward } from "react-icons/md";

export class AddTodo extends Component {
    state = {
        title: '',
    }

    onChange = (e) => this.setState({
        title: e.target.value
    });

    onSubmit = (e) => {
        console.log(e.target.value);
        if (e.target.value === undefined) {
            console.log("target is undefined!");
        } else if (e.target.value !== null) {
            e.preventDefault();
            var today = new Date();
            var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes();
            this.props.addTodo(this.state.title, date, time);
            this.setState({title: ''});
        }
    }

    render() {
        return (
            <div className="AddTodoList">
                <h2>Add new todo item</h2>
                <form className="AddTodoForm" onSubmit={this.onSubmit}>
                    <div className="AddTodoInput">        
                        <label htmlFor="title">Add Todo</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange}></input>
                    </div>
                    <div className="btnSubmit">
                        <button type="submit" >Submit <MdArrowForward /></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodo
