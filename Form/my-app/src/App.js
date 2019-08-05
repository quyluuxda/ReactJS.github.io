import React, { Component } from 'react';
// import Product from './components/Product'
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtEmail: '',
      txtPassword: '',
      Gender: 1,
      Lang:'en',
      Status: true
    }
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit = (event) => {
   console.log(this.state);
    event.preventDefault();
  }
  handleClear=()=>{
    this.setState({
      txtEmail: '',
      txtPassword: '',
      Gender: 1,
      Lang:'en',
      Status: true
    })
  }
  render() {
    return (<div className="container m-auto pt-5 row">
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            name="txtEmail" type="email"
            value={this.state.txtEmail}
            onChange={this.handleChange}
            className="form-control" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            name="txtPassword" type="password"
            value={this.state.txtPassword} 
            onChange={this.handleChange}
            className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div>
          <label htmlFor="exampleInputPassword1">Gender</label>
          <select 
          name="Gender" 
          value={this.state.Gender}
          onChange={this.handleChange} 
          className="custom-select" id="inputGroupSelect01">
            <option value={1}>Male</option>
            <option value={0}>Female</option>
          </select>
        </div><br />
        <div className="radio">
          <label htmlFor="exampleInputPassword1">Language</label><br />
          <label><input type="radio" 
          name="Lang"
          value="en"
          checked={this.state.Lang ==='en'}
          onChange={this.handleChange} 
          />English</label>
        </div>
        <div className="radio">
          <label><input 
          type="radio" 
          name="Lang" 
          value="vi"
          checked={this.state.Lang ==='vi'}
          onChange={this.handleChange} 
          />Vietnamese</label>
        </div>
        <div className="form-check">
          <input 
          name="Status" 
          checked={this.state.Status ===true}
          onChange={this.handleChange}  
          type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Active</label>
        </div><br />
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="submit" className="btn btn-danger" onClick={this.handleClear}>Clear</button>
      </form>
    </div>
    );
  }
}

export default App;
