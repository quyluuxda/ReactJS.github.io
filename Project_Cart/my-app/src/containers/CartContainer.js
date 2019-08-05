import React, { Component } from 'react';
import { connect } from 'react-redux'
import Cart from './../components/Cart'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import {actDeleteProductInCart, actChangeMessage, actUpdateQuantity} from './../actions/index'
import * as Message from './../contants/Message'

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
    let {onDeleteProductInCart, onChangeMessage, onUpdateQuantity}= this.props
    let result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr> ;
    let showSubTotal= 0
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        showSubTotal = item.product.price*item.quantity
        return <CartItem key={index}
          item={item}
          showSubTotal={showSubTotal}
          onDeleteProductInCart={onDeleteProductInCart}
          onChangeMessage={onChangeMessage}
          onUpdateQuantity={onUpdateQuantity}
        />
      })
    }
    return result
  }
  showTotalAmount(cart) {
    let result = null;
    let toTal = 0;
    let num = cart.length;
    if (num > 0) {
      for (let i = 0; i < num; i++) {
        toTal += cart[i].product.price * cart[i].quantity
      }
      result = <CartResult cart={cart}
        toTal={toTal} />
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
      dispatch(actDeleteProductInCart(product));
    },
    onChangeMessage: (message)=>{
      dispatch(actChangeMessage(message))
    },
    onUpdateQuantity: (product, quantity)=>{
      dispatch(actUpdateQuantity(product, quantity))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

