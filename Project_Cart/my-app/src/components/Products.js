import React, { Component } from 'react';
// import Product from './Product';

class Products extends Component {
  render() {
    // let { products } = this.props
    return (
      <div>
        <section className="section">
          <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
          <div className="row">
            {/* Product */}         
              {this.props.children}
          </div>
        </section>
      </div>
    );
  }
  // showProducts(products) {
  //   let result = null;
  //   if (products.length > 0) {
  //     result = products.map((product, index) => {
  //       return <Product key={index}
  //         product={product}
  //       />
  //     })
  //   }
  //   return result;
  // }
}

export default Products;
