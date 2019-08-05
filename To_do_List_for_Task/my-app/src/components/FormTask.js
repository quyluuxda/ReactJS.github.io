import React, { Component } from 'react';

class FormTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false
    }
  }
  handleCloseForm = () => {
    this.props.onClickCloseForm()
    this.setState({
    })
  }
  handleChange = (event) => {
    const target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if (name === 'status') {
      value = target.value === 'true' ? true : false
    }
    this.setState({
      [name]: value
    });
  }
  handleSubmit = (event) => {
    event.();
    this.props.onClickAdd(this.state)
    this.setState({
      status: false,
      id: '',
      name: '',
    })
  }
  handleClear = () => {
    this.setState({
      id: '',
      name: '',
      status: false
    })
  }

  componentWillMount = () => {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    // if (this.props.task !== null) {
      if(nextProps && nextProps.task){
      this.setState((prevState, nextProps) => ({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status
      }))
    // }
      }
  }

  render() {
    let task = this.props.task
    return (
      <div className="panel panel-warning">
        <div style={{ fontSize: "30px" }}>
          <span className="d-inline-block">{(task === null) ? "Thêm Công Việc" : "Sửa Công Việc"}</span><span onClick={this.handleCloseForm} className="d-inline-block float-right"><i className="fas fa-times"></i></span>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input name="name" value={this.state.name} onChange={this.handleChange} type="text" className="form-control" />
            </div>
            <label>Trạng Thái :</label>
            <select name="status" value={this.state.status} onChange={this.handleChange} className="form-control" required="required">
              <option value={true}>Quan Trọng</option>
              <option value={false}>Bình Thường</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning text-white">{(task === null) ? "Thêm" : "Sửa"}</button>&nbsp;
                <button type="button" className="btn btn-danger" onClick={this.handleClear}>Hủy Bỏ</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormTask;
