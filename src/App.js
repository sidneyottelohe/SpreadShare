import React, { Component } from 'react';
import { observer } from 'mobx-react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Feed from './Feed';
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

@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheets: [
        {name: "Remote Startup's", description: '200+ Startups hiring Remotely in 2017', link: 'http://google.com', upvotes: 20, comments: 1, tag: 'People'},
        {name: "Israel VC's", description: 'List of Israel VC Group Members', link: 'http://facebook.com', upvotes: 10, comments: 2, tag: 'Business'}
      ]
    };
  }
  render() {
    return (
        <div>
          <Router>
            <div>
              <Header />
              { this.props.store.sheets[0]}
              <Route exact path='/' render={(props) => (
                <Home {...props} sheets={this.state.sheets} />
              )}/>
              <Route path='/about' render={(props) => (
                <About {...props} />
              )}/>
              <Route path='/topics' render={(props) => (
                <Topics {...props} />
              )}/>
              <Route path='/subscribe' render={(props) => (
                <Subscribe {...props} />
              )}/>
              <Route path='/submit' render={(props) => (
                <Submit {...props} />
              )}/>
              <Route path='/spreadsheet/:name' render={(props) => (
                <Spreadsheet {...props} />
              )}/>
              <Footer />
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
