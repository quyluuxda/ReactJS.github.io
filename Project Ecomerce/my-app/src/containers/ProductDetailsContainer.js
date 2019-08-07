import React, { Component } from 'react';
import ProductDetails from './../components/ProductDetails'
import ProductDetailsItem from './../components/ProductDetailsItem'
import {actGetInfoProduct} from './../action/index'
import { connect } from 'react-redux'

class ProductDetailsContainer extends Component {
  render() {
    let { product } = this.props
    console.log(product)
    return (
      <ProductDetails>
        {this.showInfoProduct(product)}
      </ProductDetails>
    );
  }
  showInfoProduct(product) {
    let {getInfoProduct}= this.props
    let result = null
    if (product.length > 0) {
      result = product.map((item, index) => {
        return <ProductDetailsItem key={index}
          item={item}
          getInfoProduct={getInfoProduct}
        />
      })
    }
    return result;  
  }

}

const mapStateToProps = state => {
  return {
    product: state.infoproduct
  }
}

const mapDispatchToProps = (dispatch, props)=>{
  return{
    getInfoProduct: (product)=>{
      dispatch(actGetInfoProduct(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer);