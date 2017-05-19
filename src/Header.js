import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FeedItem from './FeedItem';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <div className="container container--flex container--navbar">
            <Link to="/">
              <a className="brand w-inline-block">
                <div className="brand__logo">SpreadShare</div>
              </a>
            </Link>
            <div className="navbar__menu">
              <Link to="/about"><a className="nav__link w-hidden-small w-hidden-tiny">About</a></Link>
              <Link to="/topics"><a className="nav__link w-hidden-small w-hidden-tiny">Topics</a></Link>
              <Link to="/subscribe"><a className="nav__link nav__link--btn nav__link--btn-subscribe w-hidden-small w-hidden-tiny">Subscribe</a></Link>
              <Link to="/submit"><a className="nav__link nav__link--btn" id="show-submit-spreadsheet">+ Submit Spreadsheet</a></Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
