import React, { Component } from 'react';
import FormTask from './components/FormTask';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux'
import * as actions from './actions/index'
import './App.css';
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  handleShowForm = () => {
    let {itemEditing} = this.props;
    if(itemEditing && itemEditing.id !== ''){
      this.props.onOpenForm()
    }else{
    this.props.onToggleForm();
    }
    this.props.onClearTask({
      id:'',
      name:'',
      status:false
    })
  }

  // findIndex = (id) => {
  //   let { tasks } = this.state
  //   let result = -1
  //   tasks.forEach((task, index) => {
  //     if (task.id === id) {
  //       result = index
  //     }
  //   })
  //   return result
  // }

  render() {
    let { isShowFormTask } = this.props
    return (<div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          {/* FormTask */}
          <FormTask
          />
          {/* FormTask */}
        </div>
        <div className={(isShowFormTask) ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
          <div>
            <button type="button"
              className="btn btn-primary"
              onClick={this.handleShowForm}>
              <span className="fa fa-plus mr-5" />Thêm Công Việc
          </button>
          </div>

          {/* Search + Sort */}
          <Control/>

          {/* Search + Sort */}

          {/* List */}
          <TaskList/>
          {/* List */}
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isShowFormTask: state.isShowFormTask,
    itemEditing: state.itemEditing
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: ()=>{
      dispatch(actions.toggleForm())
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task))
    },
    onOpenForm: ()=>{
      dispatch(actions.openForm())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
