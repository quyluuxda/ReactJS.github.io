import React, { Component } from 'react';
import Item from './Item';
// import './App.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const items = this.props.items;
        const ElmItems = items.map((item, index) => {
            return (<Item
                onClickDelete={this.props.onClickDelete}
                key={index} item={item} index={index} />)
        });
        return (<div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Task Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ElmItems}
                </tbody>
            </table>
        </div>
        );
    }
}


export default List;