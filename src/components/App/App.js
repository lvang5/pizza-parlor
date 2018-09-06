import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.js';
import Customer from '../Customer/Customer.js';
import Checkout from '../Checkout/Checkout.js';
import Admin from '../Admin/Admin.js';
import Home from '../Home/Home.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Link to="/"> Home </Link> */}
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
          </header>
          <br />
          <img src="images/pizza_photo.png" />
          <p>Pizza is great.</p>
          <Route exact path="/" component={Home} />
          <Route path="/customer" component={Customer} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
