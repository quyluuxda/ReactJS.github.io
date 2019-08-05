import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  onClick=(sortBy, sortValue)=>{
    this.props.onSort({
      by: sortBy,
      value: sortValue
    })
  }

  render() {
    console.log(this.props.sort)
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li onClick={()=>this.onClick('name', 1)}>
            <a href="#">
              <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z <i className={(this.props.sort.by==="name" && this.props.sort.value===1)?"fas fa-check":''}></i></span>
            </a>
          </li>
          <li onClick={()=>this.onClick('name', -1)}>
            <a href="#">
              <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A <i className={(this.props.sort.by==="name" && this.props.sort.value===-1)?"fas fa-check":''}></i></span>
            </a>
          </li>
          <li role="separator" className="divider" />
          <li onClick={()=>this.onClick('value', 1)}>
            <a href="#">Trạng Thái Quan Trọng <i className={(this.props.sort.by==="value" && this.props.sort.value===1)?"fas fa-check":''}></i>
            </a>
          </li>
          <li onClick={()=>this.onClick('value', -1)}>
            <a href="#">Trạng Thái Bình Thường <i className={(this.props.sort.by==="value" && this.props.sort.value===-1)?"fas fa-check":''}></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
      onSort: (sort) => {
          dispatch(actions.sortTask(sort))
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sort);