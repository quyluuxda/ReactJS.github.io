import React, { Component } from 'react';
// import './App.css';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }
    handleDelete(id){
        this.props.onClickDelete(id)
    }
    render() {
        const item = this.props.item
        const index = this.props.index
        return (
            <tr>
                <th scope="row">{index+1}</th>
                <td>{item.name}</td>
                <td>{this.showElmLevel(item.level)}</td>
                <td> <button onClick={()=>this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button></td>
            </tr>

        )
    }
    showElmLevel(level){
        let ElmLevel = <p className="text-primary">Small</p>
        if(level === 1){
            ElmLevel = <p className="text-warning">Medium</p>
        }else if(level === 2){
            ElmLevel = <p className="text-danger">Hight</p>
        }
        return(ElmLevel)
    }

};



export default Items;