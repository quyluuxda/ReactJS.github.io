import React, { Component } from 'react';
import Items from './Items';
// import './App.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }
  render() {
    const items = this.props.items;
    const ElmItems = items.map((item, index)=>
    {
      return(<Items 
        onClickDelete={this.props.onClickDelete}
        key={index} item={item} index={index}/>)
      
    })
    return (<div><div className="card-header">
      List task
  </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">Level</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
              {ElmItems}
          </tbody>
        </table>
      </div>
    </div>
    )
  }
};



export default List;