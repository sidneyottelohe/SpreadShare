import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './Home';
import Footer from './Footer';
import Header from './Header';

import About from './About';
import Topics from './Topics';
import Subscribe from './Subscribe';
import Submit from './Submit';
import Spreadsheet from './Spreadsheet';

import './App.css';
import './Components.css';
import './Normalize.css';

class App extends Component {
  render() {
    return (
        <div>
          <Router>
            <div>
              <Header />
              <Route exact path='/' render={(props) => (
                <Home {...this.props} {...props} />
              )}/>
              <Route path='/about' render={(props) => (
                <About {...this.props} {...props} />
              )}/>
              <Route path='/topics' render={(props) => (
                <Topics {...this.props} {...props} />
              )}/>
              <Route path='/subscribe' render={(props) => (
                <Subscribe {...this.props} {...props} />
              )}/>
              <Route path='/submit' render={(props) => (
                <Submit {...this.props} {...props} />
              )}/>
              <Route path='/spreadsheet/:name' render={(props) => (
                <Spreadsheet {...this.props} {...props} />
              )}/>
              <Footer />
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
