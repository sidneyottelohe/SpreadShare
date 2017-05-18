import React, { Component } from 'react';

import Feed from './Feed';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheets: [
        {name: 'Sheet 1', link: 'http://google.com'},
        {name: 'Sheet 2', link: 'http://facebook.com'}
      ]
    };
  }
  render() {
    return (
      <div>
        {/*  Last Published: Thu May 18 2017 14:32:10 GMT+0000 (UTC)  */}
        <meta charSet="utf-8" />
        <title>SpreadShare - Find and Share Spreadsheets</title>
        <meta content="Explore community-curated spreadsheets for startups and professionals." name="description" />
        <meta content="SpreadShare - Find and Share Spreadsheets" property="og:title" />
        <meta content="Explore community-curated spreadsheets for startups and professionals." property="og:description" />
        <meta content="https://daks2k3a4ib2z.cloudfront.net/58da70ea373f4eae11a376f7/58f93a6898b04437aa89a41b_og.png" property="og:image" />
        <meta content="summary" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="RLjGw5nJ9UNVRbPn3Hgzh12WAmgUULYT_OabZe4K_YI" name="google-site-verification" />
        <link href="css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="css/components.css" rel="stylesheet" type="text/css" />
        <link href="css/spreadshare.css" rel="stylesheet" type="text/css" />
        <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />
        <link href="images/webclip.png" rel="apple-touch-icon" />
        {/*  Google Tag Manager  */}
        {/*  End Google Tag Manager  */}
        <style dangerouslySetInnerHTML={{__html: "\n    .card__header__title.truncate { \n      width: 250px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis\n    }\n  " }} />
        <style dangerouslySetInnerHTML={{__html: "\n    button:focus {outline:0;}\n  " }} />
        <div className="tag-manager-embed w-embed w-iframe">
          {/*  Google Tag Manager (noscript)  */}
          <noscript>
            &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TT7Z9T3" height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
          </noscript>
          {/*  End Google Tag Manager (noscript)  */}
        </div>
        <header>
          <nav className="navbar">
            <div className="container container--flex container--navbar">
              <a className="brand w-inline-block" href="index.html">
                <div className="brand__logo">SpreadShare</div>
              </a>
              <div className="navbar__menu"><a className="nav__link w-hidden-small w-hidden-tiny" href="about.html">About</a><a className="nav__link w-hidden-small w-hidden-tiny" href="topics.html">Topics</a><a className="nav__link nav__link--btn nav__link--btn-subscribe w-hidden-small w-hidden-tiny" href="subscribe.html">Subscribe</a><a className="nav__link nav__link--btn" href="submit-spreadsheet.html" id="show-submit-spreadsheet">+ Submit Spreadsheet</a>
                <div className="nav__dropdown w-dropdown" data-delay={0}>
                  <div className="nav__dropdown__toggle w-dropdown-toggle" />
                  <nav className="nav__dropdown__list w-dropdown-list"><a className="nav__link nav__link--dropdown w-dropdown-link" href="about.html">About</a><a className="nav__link nav__link--dropdown w-dropdown-link" href="topics.html">Topics</a><a className="nav__link nav__link--dropdown w-dropdown-link" href="submit-spreadsheet.html">Subscribe</a><a className="nav__link nav__link--dropdown w-dropdown-link" href="submit-spreadsheet.html">Submit</a>
                  </nav>
                </div>
              </div>
            </div>
          </nav>
          <div className="section-hero">
            <div className="hero">
              <div className="container">
                <h1 className="hero__heading">Find and Share&nbsp;Spreadsheets.</h1>
                <div className="hero__sub-heading">Explore community-curated spreadsheets for startups and professionals.</div>
              </div>
            </div>
          </div>
        </header>
        <main className="main">
          <div className="section-main">
            <div className="container">
              <Feed sheets={this.state.sheets}/>
            </div>
          </div>
          <section className="section-newsletter">
            <div className="container">
              <div className="common-title">Subscribe to our email digest to discover fresh spreadsheets.</div><a className="btn-subscribe btn-subscribe--large" href="subscribe.html">Subscribe</a>
            </div>
          </section>
        </main>
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
        {/* [if lte IE 9]><![endif] */}
      </div>
    );
  }
}

export default App;
