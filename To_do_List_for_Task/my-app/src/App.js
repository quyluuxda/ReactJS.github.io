import React, { Component } from 'react';
import FormTask from './components/FormTask';
import Control from './components/Control';
import TaskList from './components/TaskList';
import demo from './demo-redux/demo';
import './App.css';
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isShowFormTask: false,
      EditTask: null,
      strSearch: '',
      filter: {
        filterName: '',
        filterStatus: -1
      },
      sortBy: 'name',
      sortValue: '1'
    }
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks"));
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    this.setState({
      tasks: tasks
    })
  }
  // handleTest = () => {
  //   let tasks = [
  //     {
  //       id: uuidv4(),
  //       name: "Hoc HTML",
  //       status: true
  //     },
  //     {
  //       id: uuidv4(),
  //       name: "Hoc CSS",
  //       status: false
  //     },
  //     {
  //       id: uuidv4(),
  //       name: "Hoc JS",
  //       status: true
  //     }
  //   ]
  //   localStorage.setItem('tasks', JSON.stringify(tasks))
  // }
  handleShowForm = () => {
    let isShowFormTask = this.state.isShowFormTask
    this.setState({
      isShowFormTask: !isShowFormTask
    })
  }
  handleCloseForm = () => {
    this.setState({
      isShowFormTask: false,
      EditTask: null
    })
  }
  handleOpenForm = () => {
    this.setState({
      isShowFormTask: true,
    })
  }
  handleAdd = (data) => {
    let { tasks } = this.state
    if (data.id === '') {
      data.id = uuidv4()
      tasks.push(data)
      this.setState({
        tasks: tasks,
      })
    } else {
      let edittedTask = this.state.tasks.find(task => task.id === data.id);
      edittedTask.name = data.name
      edittedTask.status = data.status
      this.setState({
        tasks: tasks
      })
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  handleSearch = (value) => {
    console.log(value)
    this.setState({
      strSearch: value
    })
  }
  // handleAdd = (data) => {
  //   let { tasks } = this.state
  //   data.id = uuidv4()
  //   tasks.push(data)
  //   this.setState({
  //     tasks: tasks
  //   })
  //   localStorage.setItem('tasks', JSON.stringify(tasks))
  // }
  handleUpdateStatus = (id) => {
    let { tasks } = this.state
    let index = this.findIndex(id)
    if (index !== -1) {
      tasks[index].status = !tasks[index].status
      this.setState({ tasks: tasks })
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  findIndex = (id) => {
    let { tasks } = this.state
    let result = -1
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index
      }
    })
    return result
  }

  handleDelete = (id) => {
    let { tasks } = this.state
    let index = this.findIndex(id)
    if (index !== -1) {
      tasks.splice(index, 1)
      this.setState({ tasks: tasks })
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  // handleEdit=(id)=>{
  //   let {tasks} = this.state ;
  //   let index = this.findIndex(id);
  //   let EditTask= tasks[index]
  //   this.setState({
  //     EditTask: EditTask   
  //   })
  //   this.handleOpenForm()
  // }
  handleEdit = (task) => {
    this.setState({
      EditTask: task
    })

    this.handleOpenForm()
  }
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus)
    this.setState({
      filter: {
        filterName: filterName.toLowerCase(),
        filterStatus: filterStatus
      }
    })
  }
  handleSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    })
  }
  render() {
    let { tasks, isShowFormTask, EditTask, strSearch, filter, sortBy, sortValue } = this.state
    // let filtedTasks = []
    if (filter) {
      if (filter.filterName) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.filterName) !== -1
        })
      }
      tasks = tasks.filter((task) => {
        if (filter.filterStatus === -1) {
          return task
        } else {
          return task.status === (filter.filterStatus === 0 ? true : false)
        }
      })
    }
    if (strSearch) {
      console.log(strSearch)
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(strSearch.toLowerCase()) !== -1
      })
    }
    let ElmShowForm = (isShowFormTask) ? <FormTask
      onClickCloseForm={this.handleCloseForm}
      onClickAdd={this.handleAdd}
      task={EditTask}
    /> : ''
    // let searchTasks = tasks.filter(task => {
    //   return task.name.toLowerCase().includes(strSearch.toLowerCase())
    // })
    // // console.log("============= filteredTasks", filterTasks)
    if (sortBy === 'name') {
      tasks.sort((a, b) => {
        if (a.name > b.name) {
          return sortValue
        } else if (a.name < b.name) { return -sortValue }
        else { return 0 }
      })
    } else if (sortBy === 'value') {
      tasks.sort((a, b) => {
        if (a.status > b.status) {
          return -sortValue
        } else if (a.status < b.status) { return sortValue }
      })
    }
    return (<div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          {/* FormTask */}
          {ElmShowForm}
          {/* FormTask */}
        </div>
        {/* <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"> */}
        <div className={(isShowFormTask) ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
          <div>
            <button type="button" className={(isShowFormTask) ? "btn btn-none" : "btn btn-primary"} onClick={this.handleShowForm}>
              <span className="fa fa-plus mr-5" />Thêm Công Việc
          </button>
            {/* <button type="button" className="btn btn-warning" onClick={this.handleTest}>
              <span className="fa fa-plus mr-5" />Test
        </button> */}
          </div>

          {/* Search + Sort */}
          <Control
            onClickSearch={this.handleSearch}
            onClickSort={this.handleSort}
            strSearch={strSearch}
            sortBy={sortBy}
            sortValue={sortValue}
          />
          {/* Search + Sort */}

          {/* List */}
          <TaskList
            tasks={tasks}
            onClickStatus={this.handleUpdateStatus}
            onClickDelete={this.handleDelete}
            onClickEdit={this.handleEdit}
            onFilter={this.onFilter}
          />
          {/* List */}
        </div>
      </div>
    </div>
    );
  }
}

export default App;
