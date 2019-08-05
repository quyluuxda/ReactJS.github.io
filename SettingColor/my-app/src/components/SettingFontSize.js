import React, { Component } from 'react';


class SettingColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  handleChangeSize(value){
    this.props.onClickChangeSize(value)
  }
  render() {
    return (
    <div className="card">
      <div className="card-header">
        Size: {this.props.fontSize}px
    </div>
      <div className="card-body">
        <button type="button" className="btn btn-secondary" onClick={()=>this.handleChangeSize(2)}>Tăng</button>
        <button type="button" className="btn btn-secondary mx-5"  onClick={()=>this.handleChangeSize(-2)}>Giảm</button>
      </div>
    </div>
    );
  }
}


export default SettingColor;