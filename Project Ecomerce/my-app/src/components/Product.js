import React, { Component } from 'react';

class Product extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="single-product-area mb-50">
          {/* Product Image */}
          <div className="product-img">
            <a href="shop-details.html"><img src={product.image} alt="" /></a>
            {/* Product Tag */}
            <div className="product-tag">
              <a href="#">Hot</a>
            </div>
            <div className="product-meta d-flex">
              <a href="#" className="wishlist-btn"><i className="far fa-heart"></i></a>
              <a 
              href="#/" 
              className="add-to-cart-btn"
              onClick={()=> this.onAddToCart(product)}
              >
                Add to cart</a>
              <a href={product.image} className="compare-btn"><i className="fas fa-search"></i></a>
            </div>
          </div>
          {/* Product Info */}
          <div className="product-info mt-15 text-center">
            <a href="shop-details.html">
              <p>{product.name}</p>
            </a>
            <h6>{product.price} VNĐ</h6>
          </div>
        </div>
      </div>
    );
  }
  onAddToCart = (product)=>{
    this.props.onAddToCart(product);
  }
}

export default Product;


