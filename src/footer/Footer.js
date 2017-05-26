import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
      <div className="newsletter-section">
        <h2 className="newsletter__heading">Subscribe to our email newsletter to discover new spreadsheets</h2><a className="button button--sub" href="#">Subscribe</a>
      </div>
      <footer className="footer">
        <div className="container container--footer">
          <div className="footer__info">
            <a className="brand w-inline-block" href="#">
              <div className="brand__logo">SpreadShare<span className="navbar__brand__logo-span">Beta</span>
              </div>
            </a>
            <div className="footer__heading">Find and Share Spreadsheets</div>
            <div className="footer__desc">Explore community-curated spreadsheets for startups and professionals.</div>
          </div>
          <div className="footer__links">
            <div className="footer__links__group">
              <div className="footer__links__title">Social</div><a className="footer__links__link" href="#">Facebook Group</a><a className="footer__links__link" href="#">Medium</a><a className="footer__links__link" href="#">Twitter</a>
            </div>
            <div className="footer__links__group">
              <div className="footer__links__title">Useful Links</div><a className="footer__links__link" href="#">Product Roadmap</a><a className="footer__links__link" href="#">Frequently Asked</a><a className="footer__links__link" href="#">Privacy Policy</a><a className="footer__links__link" href="#">Submit</a>
            </div>
            <div className="footer__links__group">
              <div className="footer__links__title">Navigate</div><a className="footer__links__link" href="#">Collections</a><a className="footer__links__link" href="#">Requests</a><a className="footer__links__link" href="#">Topics</a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer__meta">
            <div className="footer__meta__text">All Rights Reserved @ SpreadShare.co</div>
            <div className="footer__meta__text">Product Hunt</div>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}

export default Footer;
