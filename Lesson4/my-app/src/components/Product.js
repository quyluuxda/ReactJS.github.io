import React, { Component } from 'react';
// import './App.css';

class Product extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  //   this.handleClick=this.handleClick.bind(this)
  // }
handleClick = ()=>{
  alert(this.props.name)
}
  render() {
    return (<div className="col-md-4" >
      <div className="card" style={{ width: '18rem' }}>
        <img src={this.props.img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.price}</p>
          <button onClick={this.handleClick} className="btn btn-primary">Mua ngay</button>
        </div>
      </div>
    </div>
    );
  }
}


export default Product;