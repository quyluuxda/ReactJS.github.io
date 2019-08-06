import React, { Component } from 'react';
import Cart from './../components/Cart'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import {actDeleteProductInCart, actUpdateQuantity} from './../action/index'
import { connect } from 'react-redux'

class CartContainer extends Component {
    render() {
      let { cart } = this.props
      return (
        <Cart>
            {this.showCartItem(cart)}
            {this.showTotalAmount(cart)}
        </Cart>
      );
    }
    showCartItem(cart) {
      let {onDeleteProductInCart, onUpdateQuantity}= this.props
      let result = null;
      let showSubTotal = 0;
      if (cart.length > 0) {
        result = cart.map((item, index) => {
           showSubTotal= item.product.price.split('.').join('')*item.quantity
          return <CartItem key={index}
            item={item}
            showSubTotal={showSubTotal}
            onDeleteProductInCart={onDeleteProductInCart}
            onUpdateQuantity={onUpdateQuantity}
          />
        })
      }
      return result;
    }
    showTotalAmount(cart){
      let result = null;
      let total = 0;
      let num = cart.length;
      if(num>0){
        for (let i = 0; i<num; i++){
          total += cart[i].product.price.split('.').join('')*cart[i].quantity
        }
        result = <CartResult cart={cart}
        total = {total}/>
      }
      return result
    }
  }

  const mapStateToProps = state => {
    return {
      cart: state.cart
    }
  }
  
  const mapDispatchToProps = (dispatch, props)=>{
    return{
      onDeleteProductInCart: (product)=>{
        dispatch(actDeleteProductInCart(product))
      },
      onUpdateQuantity: (product, quantity)=>{
        dispatch(actUpdateQuantity(product,quantity))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);