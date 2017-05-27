import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import Notifications from './Notifications';
import MyAccount from './MyAccount';

@observer
class Header extends Component {
  search(e) {
    this.props.store.search = e.target.value
  }
  render() {
    return (
      <nav className="navbar">
        <div className="container container--navbar">
          <div className="div-block">
            <Link to='/'>
              <span className="brand w-inline-block">
                <div className="brand__logo">SpreadShare<span className="navbar__brand__logo-span">Beta</span>
                </div>
              </span>
            </Link>
          </div>
          <input
            className="search"
            placeholder='Search Spreadsheets...'
            id="search"
            onChange={this.search.bind(this)}
            value={this.props.store.search}
          />
          <div className="navbar__user-menu">
            <Notifications {...this.props}/>
            <MyAccount {...this.props}/>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
