import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    let {item, showSubTotal} =this.props;
    return (

      <tr>
        <td className="cart_product_img">
          <a href="#"><img src={item.product.image} alt="Product" /></a>
          <h5>{item.product.name}</h5>
        </td>
        <td className="qty">
          <div className="quantity">
            <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true" /></span>
            <input type="number" className="qty-text" id="qty" step={1} min={1} max={99} name="quantity" defaultValue={1} />
            <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true" /></span>
          </div>
        </td>
        <td className="price"><span>{item.product.price} VNĐ</span></td>
        <td className="total_price"><span>{showSubTotal} VNĐ</span></td>
        <td className="action"><a href="#"><i className="fas fa-times"></i></a></td>
      </tr>

    );
  }
}

export default CartItem;
