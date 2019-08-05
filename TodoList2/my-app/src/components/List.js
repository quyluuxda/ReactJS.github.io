import React, { Component } from 'react';
import Items from './Items'
// import './App.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

//     var numbers = [65, 44, 12, 4];
// var newarray = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
    render() {
      let items = this.props.items
      let ElmItems = items.map((item, index)=>{
        return (
          <Items key={index} item={item} index={index}
          onClickDelete = {this.props.onClickDelete}
          />
        )
      })
        return (<div className="card">
        <div className="card-header">
          List Task
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
        );
    }
}


export default List;