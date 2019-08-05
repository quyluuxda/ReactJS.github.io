import React, { Component } from 'react';
// import './App.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleDelete(name){
        this.props.onClickDelete(name)
    }
    render() {
        const item = this.props.item
        return (
            <tr>
                <td>{item.name}</td>
                <td><button onClick={()=>this.handleDelete(item.name)} type="button" className="btn btn-danger">Delete</button></td>
            </tr>
        );
    }

};



export default Item;