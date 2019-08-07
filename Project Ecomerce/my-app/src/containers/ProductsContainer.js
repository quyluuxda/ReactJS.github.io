import React, { Component } from 'react';
import { connect } from 'react-redux'
import Products from './../components/Products'
import Product from './../components/Product'
import {actAddToCart, actGetInfoProduct} from './../action/index'

class ProductsContainer extends Component {
    render() {
      let { products } = this.props
      return (
        <Products >
          {this.showProducts(products)}
        </Products>
      );
    }
    showProducts(products) {
      let{onAddToCart, getInfoProduct} = this.props
      let result = null;
      if (products.length > 0) {
        result = products.map((product, index) => {
          return <Product key={index}
            product={product}
            onAddToCart={onAddToCart}
            getInfoProduct={getInfoProduct}
          />
        })
      }
      return result;
      
    }
  }

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
      getInfoProduct: (product)=>{
        dispatch(actGetInfoProduct(product, 1))
      }
      
    }
    
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);