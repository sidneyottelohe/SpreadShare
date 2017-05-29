import React, { Component } from 'react';
import { observer } from 'mobx-react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Footer from './footer/Footer';
import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';
import Topics from './topics/Topics';
import Subscribe from './subscribe/Subscribe';
import Submit from './submit/Submit';
import Spreadsheet from './spreadsheet/Spreadsheet';
import User from './user/User';

import './css/normalize.css';
import './css/webflow.css';
import './css/spreadshare-beta.webflow.css';

@observer
class App extends Component {
  render() {
    // TODO better understand how this works
    console.log(this.props.store.isLoading);
    return (
      <Router>
        <div>
        <Header {...this.props} />
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
          <Route path='/user/:name' render={(props) => (
            <User {...this.props} {...props} />
          )}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
