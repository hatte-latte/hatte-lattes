import React, { Component } from 'react';

import {
  BrowserRouter as Router, Link, Switch, Route
} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import ProductsDisplay from './components/ProductsDisplay';
import ProductDetail from './components/ProductDetail';
import CartDisplay from './components/CartDisplay';

class App extends Component {
  render() {
    return (
      <Router> 
      <div className="App">
        <header className="App-header">
          <img src="https://png.pngtree.com/element_origin_min_pic/17/08/27/76d8d7c08330161cd2bf84e3f163ae5c.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Hatte Latte Shop</h1>
        </header>
          <div className="cart"><Link to="/cart">Shopping Cart</Link></div>
        <div className="Navbar">
          <nav className="Navbar">
            <span className="nav-links"><Link to="/">Home</Link></span>
            <span className="nav-links"><Link to="/shop">Shop</Link></span>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={ProductsDisplay} />
          <Route exact path="/shop" component={ProductsDisplay} />
          <Route exact path="/shop/item" component={ProductDetail} />
          <Route exact path="/cart" component={CartDisplay} />
          <Route exact path="/shop/confirmation" component={ProductsDisplay} />
          <Route exact path="/shop/orders" component={ProductsDisplay} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
