import React, { Component } from 'react';
import Form from './components/Form'
import List from './components/List'
import tasks from './mocks/tasks'
import {remove} from 'lodash'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: tasks,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleSubmit(item) {
    let items = this.state.items
    items.push({
      name: item.name
    })
    this.setState({
      items: items
    })
 
  }
  handleDelete(name){
    remove(this.state.items, (item)=>{return(item.name === name)})
    this.setState({
      items: this.state.items
    })

    // var evens = _.remove(array, function(n) {
    //   return n % 2 == 0;
    // });
  }
  render() {
    let items = this.state.items
    return (<div className="container">
      {/* Form add */}

      <Form onClickSubmit={this.handleSubmit}/>

      {/* List */}

      <List 
      onClickDelete={this.handleDelete}
      items={items}
        
      />
    </div>
    )
  }

}


export default App;