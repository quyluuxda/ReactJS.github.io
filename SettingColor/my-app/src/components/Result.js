import React, { Component } from 'react';


class SettingColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  change(){
    return({
      color: this.props.color,
      fontSize: this.props.fontSize
  })
}
  // color: this.props.color
  render() {
    return (<div className="col-md-12">
      <div>
        <span>Color: {this.props.color} - Fontsize: {this.props.fontSize}px</span><br />
      </div>
      <div className="content p-3 mt-3">
        <span style={this.change()}>Nội dung Setting</span>
      </div>
    </div>
    );
  }
}


export default SettingColor;