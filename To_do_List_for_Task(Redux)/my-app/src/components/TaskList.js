import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let filter = {
            name: name === "filterName" ? value : this.state.filterName,
            status: name === "filterStatus" ? value : this.state.filterStatus
        }
        this.props.onFilterTable(filter)
        this.setState({
            [name]: value
        })
    };
    render() {
        let { tasks, filterTable, keyword, sort } = this.props;
        // console.log(filterTable);
        if (filterTable.name) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1
            })
        }
        // if(filterTable.status){
        tasks = tasks.filter((task) => {
            if (filterTable.status === -1) {
                return tasks;
            } else { return task.status === (filterTable.status === 0 ? true : false) }
        })
        // }
        if (sort.by === 'name') {
            tasks.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return sort.value
                } else if (a.name.toLowerCase() < b.name.toLowerCase()) { return -sort.value }
                else { return 0 }
            })
        } else if (sort.by === 'value') {
            tasks.sort((a, b) => {
                if (a.status > b.status) {
                    return -sort.value
                } else if (a.status < b.status) { return sort.value }
            })
        }
        console.log(this.props.keyword)
        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        })
        let ElmTasks = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
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

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
        keyword: state.search,
        sort: state.sort
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTask(filter))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);