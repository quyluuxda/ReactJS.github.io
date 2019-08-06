import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    let { item, showSubTotal } = this.props;
    return (

      <tr>
        <td className="cart_product_img">
          <a href="#/"><img src={item.product.image} alt="Product" /></a>
          <h5>{item.product.name}</h5>
        </td>
        {/* <td className="qty">
          <div className="quantity">
            <label className="qty-minus" onClick={()=>this.onUpdateQuantity(item.product, item.quantity-1)}><i className="fa fa-minus" aria-hidden="true" /></label>
            <input type="number" className="qty-text" id="qty" step={1} min={1} max={99} name="quantity" defaultValue={item.quantity} />
            <label className="qty-plus" onClick={()=>this.onUpdateQuantity(item.product, item.quantity+1)}><i className="fa fa-plus" aria-hidden="true" /></label>
          </div>
        </td> */}
        <td className="qty">
          <span className="qty">{item.quantity} </span>
          <div className="btn-group radio-group ml-2" data-toggle="buttons">
            <label style={{ backgroundColor: '#f5f5f5' }} onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)} className="btn btn-sm btn-rounded waves-effect waves-light">
              <a href="#/"> - </a>
            </label>
            <label style={{ backgroundColor: '#f5f5f5' }} onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)} className="btn btn-sm btn-rounded waves-effect waves-light">
              <a href="#/"> + </a>
            </label>
          </div>
        </td>

        <td className="price"><span>{item.product.price} VNĐ</span></td>
        <td className="total_price"><span>{showSubTotal} VNĐ</span></td>
        <td className="action"><a href="#/" onClick={() => this.onDelete(item.product)}><i className="fas fa-times"></i></a></td>
      </tr>

    );
  }
  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      this.props.onUpdateQuantity(product, quantity)
    }
  }
  onDelete = (product) => {
    let { onDeleteProductInCart } = this.props
    onDeleteProductInCart(product)
  }
}

export default CartItem;
