import React, { Component } from 'react';


class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  onClick=(sortBy, sortValue)=>{
    // console.log(sortBy + ' ' + sortValue)
    // this.setState({
    //   sort:{
    //     by:sortBy,
    //     value:sortValue
    //   }
    // })
    this.props.onClickSort(sortBy,sortValue)
  }
  // componentWillReceiveProps(nextprops){
  // console.log(nextprops)
  // }
  render() {
    let {sortBy, sortValue}=this.props
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li onClick={()=>this.onClick('name', 1)}>
            <a href="none">
              <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z <i className={(sortBy==="name" && sortValue===1)?"fas fa-check":''}></i></span>
            </a>
          </li>
          <li onClick={()=>this.onClick('name', -1)}>
            <a href="none">
              <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A <i className={(sortBy==="name" && sortValue===-1)?"fas fa-check":''}></i></span>
            </a>
          </li>
          <li role="separator" className="divider" />
          <li onClick={()=>this.onClick('value', 1)}><a href="none">Trạng Thái Quan Trọng <i className={(sortBy==="value" && sortValue===1)?"fas fa-check":''}></i></a></li>
          <li onClick={()=>this.onClick('value', -1)}><a href="none">Trạng Thái Bình Thường <i className={(sortBy==="value" && sortValue===-1)?"fas fa-check":''}></i></a></li>
        </ul>
      </div>
    );
  }
}

export default Sort;
