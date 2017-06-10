import React, { Component } from 'react';
import { observer } from 'mobx-react';

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

import Notify from './utilities/notify';

// import Footer from './footer/Footer';
// import Header from './header/Header';
// import Home from './home/Home';
// import About from './about/About';
// import Topics from './topics/Topics';
// import Subscribe from './subscribe/Subscribe';
// import Submit from './submit/Submit';
// import Spreadsheet from './spreadsheet/Spreadsheet';
// import User from './user/User';

import './css/Normalize.css';
import './css/index.css';
import './css/Components.css';
import './css/App.css';

@observer
class App extends Component {
  render() {
    // TODO better understand how this works
    console.log(this.props.store.isLoading);
    return (
      <div>
          <Router>
            <div>
              <Notify {...this.props}/>
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
    // NEW DESIGN!!
    // return (
    //   <Router>
    //     <div>
    //     <Header {...this.props} />
    //       <Route exact path='/' render={(props) => (
    //         <Home {...this.props} {...props} />
    //       )}/>
    //       <Route path='/about' render={(props) => (
    //         <About {...this.props} {...props} />
    //       )}/>
    //       <Route path='/topics' render={(props) => (
    //         <Topics {...this.props} {...props} />
    //       )}/>
    //       <Route path='/subscribe' render={(props) => (
    //         <Subscribe {...this.props} {...props} />
    //       )}/>
    //       <Route path='/submit' render={(props) => (
    //         <Submit {...this.props} {...props} />
    //       )}/>
    //       <Route path='/spreadsheet/:name' render={(props) => (
    //         <Spreadsheet {...this.props} {...props} />
    //       )}/>
    //       <Route path='/user/:name' render={(props) => (
    //         <User {...this.props} {...props} />
    //       )}/>
    //       <Footer />
    //     </div>
    //   </Router>
    // );
  }
}

export default App;
