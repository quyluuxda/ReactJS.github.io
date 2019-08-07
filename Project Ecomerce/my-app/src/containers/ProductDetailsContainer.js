import React, { Component } from 'react';
import ProductDetails from './../components/ProductDetails'
import ProductDetailsItem from './../components/ProductDetailsItem'
import {actGetInfoProduct} from './../action/index'
import { connect } from 'react-redux'
import { actUpdateQuantity} from './../action/index'

class ProductDetailsContainer extends Component {
  render() {
    let { product } = this.props
    // console.log(product)
    return (
      <ProductDetails>
        {this.showInfoProduct(product)}
      </ProductDetails>
    );
  }
  showInfoProduct(product) {
    let {getInfoProduct, onUpdateQuantity}= this.props
    let result = null
    if (product.length > 0) {
      result = product.map((item, index) => {
        return <ProductDetailsItem key={index}
          item={item}
          getInfoProduct={getInfoProduct}
          onUpdateQuantity={onUpdateQuantity}
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
    getInfoProduct: (product, quantity)=>{
      dispatch(actGetInfoProduct(product, quantity))
    },
    onUpdateQuantity: (product, quantity)=>{
      dispatch(actUpdateQuantity(product,quantity))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer);