import React,{Component} from 'react';
import Form from './components/Form'
import Sort from './components/Sort'
import Search from './components/Search'
import List from './components/List'
import task from './mocks/tasks'
import {filter, includes, orderBy as funcOrderBy, remove} from 'lodash'
import './App.css';
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: task,
      strSearch:'',
      orderBy: '',
      orderDir: ''
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleSearch=this.handleSearch.bind(this)
    this.handleSort=this.handleSort.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
  }
  handleSubmit(item){
    let items = this.state.items
    items.push({
      id:uuidv4(),
      name:item.name,
      level: +item.level
    })
    this.setState ({items: this.state.items})
  }
  handleSearch(value){
    this.setState({
      strSearch: value
    })
  }
  handleSort(orderBy, orderDir){
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    })
  }
  handleDelete(id){
  remove(this.state.items, (item)=>{
    return item.id === id
  })
  this.setState({
    items: this.state.items
  })
  }

//   var array = [1, 2, 3, 4];
// var evens = _.remove(array, function(n) {
//   return n % 2 == 0;
// });

  render() {
    let items = this.state.items
    items = filter(items, (item)=>includes(item.name.toLocaleLowerCase(), this.state.strSearch.toLocaleLowerCase()))
    let orderBy = this.state.orderBy
    let orderDir = this.state.orderDir
    items = funcOrderBy(items, [orderBy], [orderDir])

    return (
      <div className="container pt-5">
        <h1>Project-01 Todo List</h1>
        <hr />
        <div className="row">
          {/* Form add */}
          <Form 
          onClickSubmit = {this.handleSubmit}
          />
          {/* Form add */}
          {/* Sort */}
          <Sort 
          onClickSort = {this.handleSort} 
          orderBy = {orderBy}
          orderDir = {orderDir}
          />
          {/* Sort */}
          {/* Search */}
          <Search 
          onClickSearch = {this.handleSearch}
          />
          {/* Search */}
        </div>
        <List
        onClickDelete = {this.handleDelete}
        items={items}/>
      </div>
    );
  }
}

  export default App;
