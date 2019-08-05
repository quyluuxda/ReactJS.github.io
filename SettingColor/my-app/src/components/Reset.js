import React, { Component } from 'react';


class SettingColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  handleReset=(value)=>{
    this.props.onClickReset(value)
  }
  render() {
    return (<div className="text-center pt-2">
      <button type="button" className="btn btn-danger" onClick={this.handleReset}>Reset</button>
    </div>
    );
  }
}


export default SettingColor;