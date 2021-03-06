import React, { Component } from 'react';

class Cart extends Component {
  render() {
    let { children } = this.props
    return (
      <div>
        {/* ##### Header Area End ##### */}
        {/* ##### Breadcrumb Area Start ##### */}
        <div className="breadcrumb-area">
          {/* Top Breadcrumb Area */}
          <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(img/bg-img/24.jpg)' }}>
            <h2>Cart</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" /> Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Cart</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Breadcrumb Area End ##### */}
        {/* ##### Cart Area Start ##### */}
        <div className="cart-area section-padding-0-100 clearfix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cart-table clearfix">
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th>Products</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>TOTAL</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {children[0]}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Coupon Discount */}
              <div className="col-12 col-lg-6">
                <div className="coupon-discount mt-70">
                  <h5>COUPON DISCOUNT</h5>
                  <p>Coupons can be applied in the cart prior to checkout. Add an eligible item from the booth of the seller that created the coupon code to your cart. Click the green "Apply code" button to add the coupon to your order. The order total will update to indicate the savings specific to the coupon code entered.</p>
                  <form action="#" method="post">
                    <input type="text" name="coupon-code" placeholder="Enter your coupon code" />
                    <button type="submit">APPLY COUPON</button>
                  </form>
                </div>
              </div>
              {/* Cart Totals */}
              
                {children[1]}
              
            </div>
          </div>
        </div>
        {/* ##### Cart Area End ##### */}
        {/* ##### Footer Area Start ##### */}
        <footer className="footer-area bg-img" style={{ backgroundImage: 'url(img/bg-img/3.jpg)' }}>
          {/* Main Footer Area */}
          <div className="main-footer-area">
            <div className="container">
              <div className="row">
                {/* Single Footer Widget */}
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="single-footer-widget">
                    <div className="footer-logo mb-30">
                      <a href="#"><img src="img/core-img/logo.png" alt="" /></a>
                    </div>
                    <p>Lorem ipsum dolor sit samet, consectetur adipiscing elit. India situs atione mantor</p>
                    <div className="social-info">
                      <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                      <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                      <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                      <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                      <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                    </div>
                  </div>
                </div>
                {/* Single Footer Widget */}
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="single-footer-widget">
                    <div className="widget-title">
                      <h5>QUICK LINK</h5>
                    </div>
                    <nav className="widget-nav">
                      <ul>
                        <li><a href="#">Purchase</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Payment</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Return</a></li>
                        <li><a href="#">Advertise</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Orders</a></li>
                        <li><a href="#">Policities</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* Single Footer Widget */}
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="single-footer-widget">
                    <div className="widget-title">
                      <h5>BEST SELLER</h5>
                    </div>
                    {/* Single Best Seller Products */}
                    <div className="single-best-seller-product d-flex align-items-center">
                      <div className="product-thumbnail">
                        <a href="shop-details.html"><img src="img/bg-img/4.jpg" alt="" /></a>
                      </div>
                      <div className="product-info">
                        <a href="shop-details.html">Cactus Flower</a>
                        <p>$10.99</p>
                      </div>
                    </div>
                    {/* Single Best Seller Products */}
                    <div className="single-best-seller-product d-flex align-items-center">
                      <div className="product-thumbnail">
                        <a href="shop-details.html"><img src="img/bg-img/5.jpg" alt="" /></a>
                      </div>
                      <div className="product-info">
                        <a href="shop-details.html">Tulip Flower</a>
                        <p>$11.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Footer Widget */}
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="single-footer-widget">
                    <div className="widget-title">
                      <h5>CONTACT</h5>
                    </div>
                    <div className="contact-information">
                      <p><span>Address:</span> 505 Silk Rd, New York</p>
                      <p><span>Phone:</span> +1 234 122 122</p>
                      <p><span>Email:</span> info.deercreative@gmail.com</p>
                      <p><span>Open hours:</span> Mon - Sun: 8 AM to 9 PM</p>
                      <p><span>Happy hours:</span> Sat: 2 PM to 4 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom Area */}
          <div className="footer-bottom-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="border-line" />
                </div>
                {/* Copywrite Text */}
                <div className="col-12 col-md-6">
                  <div className="copywrite-text">
                    <p>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                  </div>
                </div>
                {/* Footer Nav */}
                <div className="col-12 col-md-6">
                  <div className="footer-nav">
                    <nav>
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Cart;
