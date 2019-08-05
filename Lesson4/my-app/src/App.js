import React, { Component } from 'react';
import Product from './components/Product'
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: "Wave Rsx black",
          price: "28000000",
          img: "https://image.plo.vn/Uploaded/2019/obflucp/2014_02_28/wave-rsx-fi_kienthuc.net.vn_czpn_dkvk.jpg",
          status: true
        },
        {
          name: "Wave Rsx red",
          price: "27000000",
          img: "https://img.vietnamfinance.vn/thumbs/700x0/upload/news/ledinhnga/2018/11/4/A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202018-11-04%20lu%CC%81c%2011.19.31%20SA.png",
          status: true
        },
        {
          name: "Wave Rsx blue",
          price: "26000000",
          img: "https://motosaigon.vn/wp-content/uploads/2018/11/Honda-Wave-110-RSX-FI-2019-Motosaigon.vn-2.jpg",
          status: false
        }
      ],
      add: '',
      isActive: true
    }
    // this.handleAdd=this.handleAdd.bind(this)
    // this.handleChange=this.handleChange.bind(this)
  }
  handleClick = () => {
    alert("Click")
  }
  handleChange = (event) => {
    this.setState({ add: event.target.value });
  }
  handleAdd = (event) => {
    alert(this.state.add)
  }
  handleShow=()=>{
    if(this.state.isActive===true){
      this.setState({
        isActive: false
      })
    }else{
      this.setState({
        isActive: true
    })
  }}
  render() {
    let ElmProduct = this.state.products.map((product, index) => {
      let result = ''
      if (product.status) {
        result = <Product
          key={index}
          name={product.name}
          price={product.price}
          img={product.img}
        />
      }
      return result

    }
    )
    let ElmProduct2 = this.state.products.map((product, index) => {
      let result = ''
      if (this.state.isActive===true) {
        result =<tr>
          <td>{index+1}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      }
      return result
    }
    )
    return (<div>
      <div>
        <input name="add" value={this.state.value} onChange={this.handleChange} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <button onClick={this.handleAdd} type="button" className="btn btn-danger">Add</button>
      </div>
      <div className="container pt-5 m-auto row">
        {ElmProduct}
      </div>
      <div className="text-center mb-5">
        <button onClick={this.handleClick} type="button" className="btn btn-warning">Click me!</button>
      </div>

      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
            {ElmProduct2}
        </tbody>
      </table>
      <button onClick={this.handleShow} type="button" className="btn btn-warning">Is Show</button>
    </div>
    );
  }
}

export default App;
