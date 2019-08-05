import React, { Component } from 'react';

class SettingColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors:[
        "red", "yellow", "green", "blue","brown"
      ]
    }
  }
 showColor(color){
   return {backgroundColor:color}
 }
 handleActiveColor(color){
   this.props.onReceiveColor(color)
 }
  render() {
    let ElmColor= this.state.colors.map((color, index)=>{
      return <div 
      key={index}
      style={this.showColor(color)}
      className={this.props.color === color?'active':'color-style'}
      onClick={()=>this.handleActiveColor(color)}
      />
    })
    return (<div className="col-md-6">
    <div className="card">
      <div className="card-header">
        Color Picker
    </div>
      <div className="card-body">
      {ElmColor}
      </div>
    </div>
  </div>
    );
  }
}


export default SettingColor;