import React, { Component } from 'react';

class CartResult extends Component {
  render() {
    let { total } = this.props;
    return (
      <div className="col-12 col-lg-6">
        <div className="cart-totals-area mt-70">
          <h5 className="title--">Cart Total</h5>
          <div className="subtotal d-flex justify-content-between">
            <h5>Subtotal</h5>
            <h5>{total} VNĐ</h5>
          </div>
          <div className="shipping d-flex justify-content-between">
            <h5>Shipping</h5>
            <div className="shipping-address">
              <form action="#" method="post">
                <select className="custom-select">
                  <option selected>Tỉnh, Thành Phố</option>
                  <option value={1}>Hà Nội</option>
                  <option value={2}>Hồ Chí Minh</option>
                  <option value={3}>Khác</option>
                </select>
                <input type="text" name="shipping-text" id="shipping-text" placeholder="Địa chỉ" />
                <input type="text" name="shipping-zip" id="shipping-zip" placeholder="ZIP" />
                <button type="submit">Update Total</button>
              </form>
            </div>
          </div>
          <div className="total d-flex justify-content-between">
            <h5>Total</h5>
            <h5>{total} VNĐ</h5>
          </div>
          <div className="checkout-btn">
            <a href="#" className="btn alazea-btn w-100">PROCEED TO CHECKOUT</a>
          </div>
        </div>
      </div>
    );
  }
}

export default CartResult;
