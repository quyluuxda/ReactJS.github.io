import React, { Component } from 'react';
import SettingColor from './components/SettingColor'
import SettingFontSize from './components/SettingFontSize'
import Reset from './components/Reset'
import Result from './components/Result'
import './App.css';
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 16
    }
  }
  handleActiveColor = (color) => {
    this.setState({
      color: color
    })
  }
  handleChangeSize=(size)=> {
    // if(this.state.fontSize + size >= 10 && this.state.fontSize + size <=20){
    //   this.setState({
    //     fontSize: this.state.fontSize + size
    //   })
    // }
    this.setState({
      fontSize: (this.state.fontSize + size >= 10 && this.state.fontSize + size <=20)? this.state.fontSize + size : this.state.fontSize
    })
  }
  handleReset=()=>{
    this.setState({
      color: 'red',
      fontSize: 16
    })
  }
  render() {
    return (<div className="container m-auto pt-5 row">
      <SettingColor color={this.state.color}
        onReceiveColor={this.handleActiveColor}
      />
      <div className="col-md-6">
        <SettingFontSize
          fontSize={this.state.fontSize}
          onClickChangeSize={this.handleChangeSize}
        />
        <Reset 
        onClickReset = {this.handleReset}
        />
      </div>
      <Result 
      color={this.state.color}
      fontSize={this.state.fontSize}
      />
    </div>
    );
  }
}

export default App;
