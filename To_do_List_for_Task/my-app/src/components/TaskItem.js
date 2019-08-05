import React, { Component } from 'react';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleStatus=()=>{
      this.props.onClickStatus(this.props.task.id)
    }
    handleDelete=()=>{
      this.props.onClickDelete(this.props.task.id)
    }
    handleEdit=(task)=>{
      this.props.onClickEdit(this.props.EditTask.id)
    }
    render() {
        let task = this.props.task
        let index = this.props.index
        return (<tr>
            <td>{index+1}</td>
            <td>{task.name}</td>
            <td className="text-center">
              <span className={(task.status)?'text-danger':'text-primary'}
              onClick={this.handleStatus}
              >
                {(task.status)?'Quan Trọng':'Bình Thường'}
            </span>
            </td>
            <td className="text-center">
            <button type="button" className="btn btn-warning text-white"  onClick={() => this.props.onClickEdit(task)}>
                <span className="fa fa-pencil-alt mr-5"/>Sửa
            </button>
              &nbsp;
            <button type="button" className="btn btn-danger" onClick={this.handleDelete}>
                <span className="fa fa-trash mr-5"/>Xóa
            </button>
            </td>
          </tr>
        );
    }
}

export default TaskItem;