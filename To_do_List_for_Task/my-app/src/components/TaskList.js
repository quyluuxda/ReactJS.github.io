import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }
    handleChange=(event)=> {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.props.onFilter(
        (name==="filterName")?value:this.state.filterName,
        (name==="filterStatus")?value:this.state.filterStatus
        )
        this.setState({
            [name]: value
        });
    }
    render() {
        let {tasks} = this.props
        let ElmTasks = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
                onClickStatus={this.props.onClickStatus}
                onClickDelete={this.props.onClickDelete}
                onClickEdit={this.props.onClickEdit}
            />
        })
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td />
                                <td>
                                    <input name="filterName" value={this.state.value} onChange={this.handleChange} type="text" className="form-control" />
                                </td>
                                <td>
                                    <select name="filterStatus" value={this.state.value} onChange={this.handleChange} className="form-control">
                                        <option value={-1}>Tất Cả</option>
                                        <option value={0}>Quan Trọng</option>
                                        <option value={1}>Bình Thường</option>
                                    </select>
                                </td>
                                <td />
                            </tr>
                            {ElmTasks}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskList;