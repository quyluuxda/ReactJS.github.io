import React, { Component } from 'react';


class Products extends Component {
  render() {
    return (
      <div>
        {/* ##### Header Area End ##### */}
        {/* ##### Breadcrumb Area Start ##### */}
        <div className="breadcrumb-area">
          {/* Top Breadcrumb Area */}
          <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(img/bg-img/24.jpg)'}}>
            <h2>SHOP DETAILS</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" /> Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Shop</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop Details</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Breadcrumb Area End ##### */}
        {/* ##### Single Product Details Area Start ##### */}
        <section className="single_product_details_area mb-50">
          <div className="produts-details--content mb-50">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-12 col-md-6 col-lg-5">
                  <div className="single_product_thumb">
                    <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <a className="product-img" href="img/bg-img/49.jpg" title="Product Image">
                            <img className="d-block w-100" src="img/bg-img/49.jpg" alt={1} />
                          </a>
                        </div>
                        <div className="carousel-item">
                          <a className="product-img" href="img/bg-img/49.jpg" title="Product Image">
                            <img className="d-block w-100" src="img/bg-img/49.jpg" alt={1} />
                          </a>
                        </div>
                        <div className="carousel-item">
                          <a className="product-img" href="img/bg-img/49.jpg" title="Product Image">
                            <img className="d-block w-100" src="img/bg-img/49.jpg" alt={1} />
                          </a>
                        </div>
                      </div>
                      <ol className="carousel-indicators">
                        <li className="active" data-target="#product_details_slider" data-slide-to={0} style={{backgroundImage: 'url(img/bg-img/49.jpg)'}}>
                        </li>
                        <li data-target="#product_details_slider" data-slide-to={1} style={{backgroundImage: 'url(img/bg-img/49.jpg)'}}>
                        </li>
                        <li data-target="#product_details_slider" data-slide-to={2} style={{backgroundImage: 'url(img/bg-img/49.jpg)'}}>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="single_product_desc">
                    <h4 className="title">Recuerdos Plant</h4>
                    <h4 className="price">$9.99</h4>
                    <div className="short_overview">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellem malesuada in nibh selama euismod. Curabitur a rhoncus dui. Nunc lobortis cursus magna utrum faucibus. Vivamus justo nibh, pharetra non risus accumsan, tincidunt suscipit leo.</p>
                    </div>
                    <div className="cart--area d-flex flex-wrap align-items-center">
                      {/* Add to Cart Form */}
                      <form className="cart clearfix d-flex align-items-center" method="post">
                        <div className="quantity">
                          <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true" /></span>
                          <input type="number" className="qty-text" id="qty" step={1} min={1} max={12} name="quantity" defaultValue={1} />
                          <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true" /></span>
                        </div>
                        <button type="submit" name="addtocart" value={5} className="btn alazea-btn ml-15">Add to cart</button>
                      </form>
                      {/* Wishlist & Compare */}
                      <div className="wishlist-compare d-flex flex-wrap align-items-center">
                        <a href="#" className="wishlist-btn ml-15"><i className="icon_heart_alt" /></a>
                        <a href="#" className="compare-btn ml-15"><i className="arrow_left-right_alt" /></a>
                      </div>
                    </div>
                    <div className="products--meta">
                      <p><span>SKU:</span> <span>CT201807</span></p>
                      <p><span>Category:</span> <span>Outdoor Plants</span></p>
                      <p><span>Tags:</span> <span>plants, green, cactus </span></p>
                      <p>
                        <span>Share on:</span>
                        <span>
                          <a href="#"><i className="fa fa-facebook" /></a>
                          <a href="#"><i className="fa fa-twitter" /></a>
                          <a href="#"><i className="fa fa-pinterest" /></a>
                          <a href="#"><i className="fa fa-google-plus" /></a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="product_details_tab clearfix">
                  {/* Tabs */}
                  <ul className="nav nav-tabs" role="tablist" id="product-details-tab">
                    <li className="nav-item">
                      <a href="#description" className="nav-link active" data-toggle="tab" role="tab">Description</a>
                    </li>
                    <li className="nav-item">
                      <a href="#addi-info" className="nav-link" data-toggle="tab" role="tab">Additional Information</a>
                    </li>
                    <li className="nav-item">
                      <a href="#reviews" className="nav-link" data-toggle="tab" role="tab">Reviews <span className="text-muted">(1)</span></a>
                    </li>
                  </ul>
                  {/* Tab Content */}
                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade show active" id="description">
                      <div className="description_area">
                        <p>Sed a facilisis orci. Curabitur magna urna, varius placerat placerat sodales, pretium vitae orci. Aliquam erat volutpat. Cras sit amet suscipit magna. Quisque turpis odio, facilisis vel eleifend eu, dignissim ac odio.</p>
                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. In scelerisque augue at the moment mattis. Proin vitae arcu sit amet justo sollicitudin tincidunt sit amet ut velit.Proin placerat vel augue eget euismod. Phasellus cursus orci eu tellus vestibulum, vestibulum urna accumsan. Vestibulum ut ullamcorper sapien. Pellentesque molestie, est ac vestibulum eleifend, lorem ipsum mollis ipsum.</p>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="addi-info">
                      <div className="additional_info_area">
                        <p>What should I do if I receive a damaged parcel?
                          <br /> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit impedit similique qui, itaque delectus labore.</span></p>
                        <p>I have received my order but the wrong item was delivered to me.
                          <br /> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam voluptatum beatae harum tempore, ab?</span></p>
                        <p>Product Receipt and Acceptance Confirmation Process
                          <br /> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ducimus, temporibus soluta impedit minus rerum?</span></p>
                        <p>How do I cancel my order?
                          <br /> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eius eum, minima!</span></p>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="reviews">
                      <div className="reviews_area">
                        <ul>
                          <li>
                            <div className="single_user_review mb-15">
                              <div className="review-rating">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <span>for Quality</span>
                              </div>
                              <div className="review-details">
                                <p>by <a href="#">Colorlib</a> on <span>12 Sep 2018</span></p>
                              </div>
                            </div>
                            <div className="single_user_review mb-15">
                              <div className="review-rating">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <span>for Design</span>
                              </div>
                              <div className="review-details">
                                <p>by <a href="#">Colorlib</a> on <span>12 Sep 2018</span></p>
                              </div>
                            </div>
                            <div className="single_user_review">
                              <div className="review-rating">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <span>for Value</span>
                              </div>
                              <div className="review-details">
                                <p>by <a href="#">Colorlib</a> on <span>12 Sep 2018</span></p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="submit_a_review_area mt-50">
                        <h4>Submit A Review</h4>
                        <form action="#" method="post">
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group d-flex align-items-center">
                                <span className="mr-15">Your Ratings:</span>
                                <div className="stars">
                                  <input type="radio" name="star" className="star-1" id="star-1" />
                                  <label className="star-1" htmlFor="star-1">1</label>
                                  <input type="radio" name="star" className="star-2" id="star-2" />
                                  <label className="star-2" htmlFor="star-2">2</label>
                                  <input type="radio" name="star" className="star-3" id="star-3" />
                                  <label className="star-3" htmlFor="star-3">3</label>
                                  <input type="radio" name="star" className="star-4" id="star-4" />
                                  <label className="star-4" htmlFor="star-4">4</label>
                                  <input type="radio" name="star" className="star-5" id="star-5" />
                                  <label className="star-5" htmlFor="star-5">5</label>
                                  <span />
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label htmlFor="name">Nickname</label>
                                <input type="email" className="form-control" id="name" placeholder="Nazrul" />
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label htmlFor="options">Reason for your rating</label>
                                <select className="form-control" id="options">
                                  <option>Quality</option>
                                  <option>Value</option>
                                  <option>Design</option>
                                  <option>Price</option>
                                  <option>Others</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label htmlFor="comments">Comments</label>
                                <textarea className="form-control" id="comments" rows={5} data-max-length={150} defaultValue={""} />
                              </div>
                            </div>
                            <div className="col-12">
                              <button type="submit" className="btn alazea-btn">Submit Your Review</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Single Product Details Area End ##### */}
        {/* ##### Related Product Area Start ##### */}
        <div className="related-products-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Section Heading */}
                <div className="section-heading text-center">
                  <h2>Related Products</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Product Area */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-product-area mb-100">
                  {/* Product Image */}
                  <div className="product-img">
                    <a href="shop-details.html"><img src="img/bg-img/40.png" alt="" /></a>
                    {/* Product Tag */}
                    <div className="product-tag">
                      <a href="#">Hot</a>
                    </div>
                    <div className="product-meta d-flex">
                      <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
                      <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                      <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                    </div>
                  </div>
                  {/* Product Info */}
                  <div className="product-info mt-15 text-center">
                    <a href="shop-details.html">
                      <p>Cactus Flower</p>
                    </a>
                    <h6>$10.99</h6>
                  </div>
                </div>
              </div>
              {/* Single Product Area */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-product-area mb-100">
                  {/* Product Image */}
                  <div className="product-img">
                    <a href="shop-details.html"><img src="img/bg-img/41.png" alt="" /></a>
                    <div className="product-meta d-flex">
                      <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
                      <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                      <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                    </div>
                  </div>
                  {/* Product Info */}
                  <div className="product-info mt-15 text-center">
                    <a href="shop-details.html">
                      <p>Cactus Flower</p>
                    </a>
                    <h6>$10.99</h6>
                  </div>
                </div>
              </div>
              {/* Single Product Area */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-product-area mb-100">
                  {/* Product Image */}
                  <div className="product-img">
                    <a href="shop-details.html"><img src="img/bg-img/42.png" alt="" /></a>
                    <div className="product-meta d-flex">
                      <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
                      <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                      <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                    </div>
                  </div>
                  {/* Product Info */}
                  <div className="product-info mt-15 text-center">
                    <a href="shop-details.html">
                      <p>Cactus Flower</p>
                    </a>
                    <h6>$10.99</h6>
                  </div>
                </div>
              </div>
              {/* Single Product Area */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-product-area mb-100">
                  {/* Product Image */}
                  <div className="product-img">
                    <a href="shop-details.html"><img src="img/bg-img/43.png" alt="" /></a>
                    {/* Product Tag */}
                    <div className="product-tag sale-tag">
                      <a href="#">Hot</a>
                    </div>
                    <div className="product-meta d-flex">
                      <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
                      <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                      <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                    </div>
                  </div>
                  {/* Product Info */}
                  <div className="product-info mt-15 text-center">
                    <a href="shop-details.html">
                      <p>Cactus Flower</p>
                    </a>
                    <h6>$10.99</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Related Product Area End ##### */}
        {/* ##### Footer Area Start ##### */}
        <footer className="footer-area bg-img" style={{backgroundImage: 'url(img/bg-img/3.jpg)'}}>
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

export default Products;


