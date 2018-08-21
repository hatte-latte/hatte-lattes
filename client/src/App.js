import React, { Component } from 'react';
import {
  BrowserRouter as Router, Link, Switch, Route
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import ProductsDisplay from './components/ProductsDisplay';

class App extends Component {
  render() {
    return (
      <Router> 
      <div className="App">
        <header className="App-header">
          <img src="https://png.pngtree.com/element_origin_min_pic/17/08/27/76d8d7c08330161cd2bf84e3f163ae5c.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Hatte Latte Shop</h1>
        </header>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={ProductsDisplay} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
