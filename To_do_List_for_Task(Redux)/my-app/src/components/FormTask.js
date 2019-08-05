import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class FormTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false,
    }
  }
  handleCloseForm = () => {
    // this.props.onClickCloseForm()
    // this.setState({
    // })
    this.props.onCloseForm()
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
    event.preventDefault();
    // this.props.onClickAdd(this.state)
    this.props.onSaveTask(this.state)
    this.onClear()
  }
  handleClear = () => {
    this.setState({
      name: '',
      status: false
    })
  }

  componentWillMount = () => {
    if (this.props.itemEditing) {
      this.setState({
        id: this.props.itemEditing.id,
        name: this.props.itemEditing.name,
        status: this.props.itemEditing.status
      })
    }else{
      this.onClear();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      this.setState((prevState, nextProps) => ({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status
      }))
    } else {
      this.onClear()
    }
  }

  onClear(){
    this.setState({
      id: '',
      name: '',
      status: false
    })
  }
  render() {
    // let task = this.props.task
    if(!this.props.isShowFormTask) return null;
    return (
      <div className="panel panel-warning">
        <div style={{ fontSize: "30px" }}>
          <span className="d-inline-block">{(!this.state.id) ? "Thêm Công Việc" : "Sửa Công Việc"}</span><span onClick={this.handleCloseForm} className="d-inline-block float-right"><i className="fas fa-times"></i></span>
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
              <button type="submit" className="btn btn-warning text-white">Lưu Lại</button>&nbsp;
                <button type="button" className="btn btn-danger" onClick={this.handleClear}>Hủy Bỏ</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isShowFormTask: state.isShowFormTask,
    itemEditing: state.itemEditing
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task))
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormTask);
