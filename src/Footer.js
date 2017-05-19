import React, { Component } from 'react';

import FeedItem from './FeedItem';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__main">
          <div className="container container--footer">
            <div className="footer-meta">
              <a className="footer__brand w-inline-block" href="index.html">
                <div className="brand__logo">SpreadShare <span className="brand__logo--beta">Beta</span>
                </div>
              </a>
              <div className="footer__text footer__text--bold">Find and Share Spreadsheets</div>
              <div className="footer__text">Explore community-curated spreadsheets for startups and professionals.</div>
            </div>
            <div className="footer__menu">
              <div className="footer__title">Social</div><a className="footer__link" href="https://medium.com/spreadshare" target="_blank">Medium</a><a className="footer__link" href="https://twitter.com/SpreadShareCo" target="_blank">Twitter</a><a className="footer__link" href="https://www.facebook.com/groups/403500643362775" target="_blank">Facebook</a>
            </div>
            <div className="footer__menu">
              <div className="footer__title">useful links</div><a className="footer__link" href="/about#faq">Frequently Asked</a><a className="footer__link" href="feature-requests.html">Request a Spreadsheet</a><a className="footer__link" href="feature-requests.html">Feature Request</a><a className="footer__link" href="privacy-policy.html">Privacy Policy</a>
            </div>
            <div className="footer__menu">
              <div className="footer__title">Links</div><a className="footer__link" href="submit-spreadsheet.html">Submit</a><a className="footer__link" href="about.html">About</a><a className="footer__link" href="topics.html">Topics</a>
            </div>
          </div>
        </div>
        <div className="footer__credit">
          <div className="container container--flex">
            <div className="footer__text footer__text--credit">Curated with ♥ by <a href="https://twitter.com/bnjmnlbr" target="_blank" className="footer__text--inline-link">Benjamin Libor</a> &amp;&nbsp;<a href="https://twitter.com/sidneyottelohe" target="_blank" className="footer__text--inline-link">Sidney Ottelohe</a>
            </div>
            <a className="ph-button w-inline-block" href="https://www.producthunt.com/posts/spreadshare" target="_blank"><img src="images/product-hunt-logo-orange-240.jpg" width={120} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
