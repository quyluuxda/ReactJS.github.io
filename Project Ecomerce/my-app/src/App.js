import React, { Component } from 'react';
import Home from './components/Home';
import ProductDetailsContainer from './containers/ProductDetailsContainer';
import Posts from './components/Posts';
import Contact from './components/Contact';
import CartContainer from './containers/CartContainer';
import ProductsContainer from './containers/ProductsContainer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    let { product } = this.props;
    return (
      <Router>
        <div>
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-circle" />
            <div className="preloader-img">
              <img src="img/core-img/leaf.png" alt="" />
            </div>
          </div>
          <header className="header-area">
            {/* ***** Top Header Area ***** */}
            <div className="top-header-area">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="top-header-content d-flex align-items-center justify-content-between">
                      {/* Top Header Content */}
                      <div className="top-header-meta">
                        <a href="mailto:quyluuxda@gmail.com" data-toggle="tooltip" data-placement="bottom" title="quyluuxda@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true" /> <span>Email: quyluuxda@gmail.com</span></a>
                        <a href="tel:+84-0356688339" data-toggle="tooltip" data-placement="bottom" title="+84-0356688339"><i className="fa fa-phone" aria-hidden="true" /> <span>Call Us: +84-035 66 88 339</span></a>
                      </div>
                      {/* Top Header Content */}
                      <div className="top-header-meta d-flex">
                        {/* Login */}
                        <div className="login">
                          <a href="#"><i className="fa fa-user" aria-hidden="true" /> <span>Login</span></a>
                        </div>
                        {/* Cart */}
                        <div className="cart">
                          <Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true" /> <span>Cart <span className="cart-quantity">(1)</span></span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ***** Navbar Area ***** */}
            <div className="alazea-main-menu">
              <div className="classy-nav-container breakpoint-off">
                <div className="container">
                  {/* Menu */}
                  <nav className="classy-navbar justify-content-between" id="alazeaNav">
                    {/* Nav Brand */}
                    <Link to='/' className="nav-brand"><img src="img/core-img/logo.png" alt="" /></Link>
                    {/* Navbar Toggler */}
                    <div className="classy-navbar-toggler">
                      <span className="navbarToggler"><span /><span /><span /></span>
                    </div>
                    {/* Menu */}
                    <div className="classy-menu">
                      {/* Close Button */}
                      <div className="classycloseIcon">
                        <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                      </div>
                      {/* Navbar Start */}
                      <div className="classynav">
                        {/* Nav */}

                        <ul>
                          <li><Link to='/' exact="true" >Trang chủ</Link></li>
                          <li><Link to='/products' >Sản phẩm</Link></li>
                          <li><Link to='/posts' >Bài viết</Link></li>
                          <li><Link to='/contact' >Liên hệ</Link></li>
                          <li><Link to='product-details' >Chi tiết</Link></li>
                        </ul>

                        {/* Search Icon */}
                        <div id="searchIcon">
                          <i className="fa fa-search" aria-hidden="true" />
                        </div>
                      </div>
                      {/* Navbar End */}
                    </div>
                  </nav>
                  {/* Search Form */}
                  <div className="search-form">
                    <form action="#" method="get">
                      <input type="search" name="search" id="search" placeholder="Type keywords & press enter..." />
                      <button type="submit" className="d-none" />
                    </form>
                    {/* Close Icon */}
                    <div className="closeIcon"><i className="fa fa-times" aria-hidden="true" /></div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        {/* Noi dung */}
        <Route path='/' exact component={Home} />
        <Route path='/products' component={ProductsContainer} />
        <Route path='/posts' component={Posts} />
        <Route path='/contact' component={Contact} />
        <Route path='/cart' component={CartContainer} />
        <Route path='/product-details' component={ProductDetailsContainer} />
      </Router>
    );
  }
}

export default App;
