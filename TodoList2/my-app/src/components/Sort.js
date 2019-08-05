import React, { Component } from 'react';
// import './App.css';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleSort(orderBy, orderDir){
      this.props.onClickSort(orderBy, orderDir)
    }
    render() {
        return (<div className="col-md-3">
          <button type="button" style={{ border: '1px solid #ced4da' }} className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sort
        </button>
      <div className="dropdown-menu">
          <a href="#void" onClick={()=>this.handleSort("name", "asc")} className="dropdown-item">Name - Asc</a>
          <a href="#void" onClick={()=>this.handleSort("name", "desc")} className="dropdown-item">Name - Desc</a>
          <div className="dropdown-divider" />
          <a href="#void" onClick={()=>this.handleSort("level", "asc")} className="dropdown-item">Level - Asc</a>
          <a href="#void" onClick={()=>this.handleSort("level", "desc")} className="dropdown-item">Level - Desc</a>
      </div>
      </div>
        );
    }
}


export default Sort;