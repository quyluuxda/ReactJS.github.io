import React,{Component} from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProducstContainer'
// import Cart from './components/Cart';
import Footer from './components/Footer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';


class App extends Component {
  render(){
  return (
    <div className="App">
      <div className="hidden-sn animated deep-purple-skin">
          {/* Header */}
          <Header/>
          <main id="mainContainer">
            <div className="container">
              {/* Products */}
              <ProductsContainer/>
              {/* Message */}
              <MessageContainer/>
              {/* Cart */}
              <CartContainer/>
            </div>
          </main>
          {/* Footer */}
          <Footer/>
      </div>
    </div>
  );
}
}

export default App;
