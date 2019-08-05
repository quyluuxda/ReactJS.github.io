import React, { Component } from 'react';
// import './App.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task_name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        let item = {
            name: this.state.task_name
        }
        this.props.onClickSubmit(item)
    }
    render() {

        return (<div>
            <h2>To do List</h2>
            <form onSubmit={this.handleSubmit} className="input-group mb-3">
                <input name="task_name" value={this.state.task_name} onChange={this.handleChange} type="text" className="form-control" placeholder="Task name..." aria-label="Task name..." aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
                </div>
            </form>
        </div>
        );
    }
}


export default Form;