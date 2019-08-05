import React, { Component } from 'react';
import { connect } from 'react-redux'
import Products from './../components/Products'
import Product from './../components/Product'
import {actAddToCart} from './../actions/index'
import {actChangeMessage} from './../actions/index'
// import PropTypes from 'prop-types';

class ProductsContainer extends Component {
  render() {
    let { products } = this.props
    return (
      <Products>
        {this.showProducts(products)}
      </Products>
    );
  }
  showProducts(products) {
    let {onAddToCart, onChangeMessage}= this.props
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product key={index}
          product={product}
          onAddToCart={onAddToCart}
          onChangeMessage = {onChangeMessage}
        />
      })
    }
    return result;
  }
}

// ProductsContainer.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired
//     })
//   ).isRequired
// }
const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props)=>{
  return{
    onAddToCart: (product)=>{
      dispatch(actAddToCart(product, 1))
    },
    onChangeMessage: (message)=>{
      dispatch(actChangeMessage(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
