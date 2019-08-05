import React, { Component } from 'react';
import Form from './components/Form';
import Search from './components/Search';
import List from './components/List';
import tasks from './mocks/tasks';
import { remove,filter,includes} from 'lodash'
import './App.css';
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: tasks,
      strSearch: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSubmit(item) {
    let items = this.state.items
    items.push({
      id: uuidv4(),
      name: item.name,
      level: +item.level
    })
    this.setState({
      items: items
    })
  }
  handleDelete(id) {
    remove(this.state.items, (item)=> {
      return item.id === id
    })
    this.setState({
      items: this.state.items
    })
  }
  handleSearch(value){
    this.setState({
      strSearch: value
    })
  }
  render() {
    let items = this.state.items
    items = filter(this.state.items, (item)=>
      includes(item.name.toLowerCase(), this.state.strSearch.toLowerCase()))
    return (
      <div className="container pt-5">
        <h1>Project-01 Todo List</h1>
        <hr />
        <div className="row">
          {/* Form add task */}
          <Form
            onClickSubmit={this.handleSubmit}
          />
          {/* Form add task */}
          {/* Search */}
          <Search 
          onClickGo={this.handleSearch}
          />
          {/* Search */}
        </div>
        <div className="card">
          <List
            items={items}
            onClickDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
