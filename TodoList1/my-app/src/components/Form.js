import React, { Component } from 'react';
// import './App.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task_id: '',
      task_name: '',
      task_level: 1
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

    let item={
      id:this.state.task_id,
      name:this.state.task_name,
      level:this.state.task_level
    }
    this.props.onClickSubmit(item)
    event.preventDefault();

  }
  render() {
    return (<div className="col-md-7">
      <form onSubmit={this.handleSubmit}>
        <div style={{ width: '50%', float: 'left' }}>
          <input name="task_name" type="text" value={this.state.task_name} onChange={this.handleChange} className="form-control" placeholder="Task Name" aria-label="Task Name" aria-describedby="basic-addon2" />
        </div>
        <div style={{ width: '25%', float: 'left' }}>
          <select name="task_level" value={this.state.task_level} onChange={this.handleChange} className="custom-select" id="inputGroupSelect01">
            <option value={2}>Hight</option>
            <option value={1}>Medium</option>
            <option value={0}>Small</option>
          </select>
        </div>
        <div style={{ display: 'inline' }}>
          <button type="submit" className="btn btn-info">Submit</button>
        </div>
      </form>
    </div>
    )
  }
};



export default Form;