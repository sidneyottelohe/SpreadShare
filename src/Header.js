import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <div className="container container--flex container--navbar">
            <Link to="/">
              <span className="brand w-inline-block">
                <div className="brand__logo">SpreadShare</div>
              </span>
            </Link>
            <div className="navbar__menu">
              <Link to="/about"><span className="nav__link w-hidden-small w-hidden-tiny">About</span></Link>
              <Link to="/topics"><span className="nav__link w-hidden-small w-hidden-tiny">Topics</span></Link>
              <Link to="/subscribe"><span className="nav__link nav__link--btn nav__link--btn-subscribe w-hidden-small w-hidden-tiny">Subscribe</span></Link>
              <Link to="/submit"><span className="nav__link nav__link--btn" id="show-submit-spreadsheet">+ Submit Spreadsheet</span></Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
