import React, { Component } from 'react';

import FeedItem from './FeedItem';
import Feed from './Feed';

class About extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="section-hero">
            <div className="hero">
              <div className="container">
                <h1 className="hero__heading">About SpreadShare</h1>
              </div>
            </div>
          </div>
        </header>
        <main className="main">
          <div className="section-main">
            <div className="container">
              <div className="content-wrapper-flex">
                <div className="content-wrapper">
                  <h2 className="common-heading">ABOUT US</h2>
                  <p className="common-copy">SpreadShare let's you explore community-curated spreadsheets. These spreadsheets can be anything. Contact lists, product comparisons, financial tools, dashboard templates and whatever you can imagine.
                    <br />
                    <br />If you want to know more check out the&nbsp;<a href="https://medium.com/spreadshare/https-medium-com-benjamin-libor-spreadshare-launch-ca113d03b5e4">story how we build this product</a>.</p>
                </div>
                <div className="content-wrapper content-wrapper--contact">
                  <h2 className="common-heading">CONTAct</h2><a className="link" href="mailto:hi@spreadshare.com">hi@spreadshare.co</a><a className="link link--twitter" href="https://twitter.com/SpreadShareCo" target="_blank">Twitter</a><a className="link link--facebook" href="https://www.facebook.com/groups/403500643362775" target="_blank">Facebook</a><a className="link link--medium" href="https://medium.com/spreadshare" target="_blank">Medium</a>
                </div>
              </div>
              <div className="content-wrapper-flex content-wrapper-flex--bottom">
                <div className="content-wrapper">
                  <h2 className="common-heading">COMMUNITY</h2>
                  <p className="common-copy">SpreadShare wouldn't be possible without the awesome community of professionals that are contributing their findings (and creations). You guys rock!</p><a className="btn btn--card" href="submit-spreadsheet.html">+ Submit a spreadsheet</a>
                </div>
                <div className="content-wrapper content-wrapper--highlight">
                  <div className="common-heading">JOIN US</div>
                  <p className="common-copy">🙏 If you’re an engineer, content creator or community manager and love the product we’re building, get in touch!
                    <br />
                    <br />
                  </p><a className="btn btn--card btn--highlight btn--mail" href="mailto:benjamin@spreadshare.co?subject=I'm Interested!">I'm Interested!</a>
                </div>
              </div>
            </div>
          </div>
          <div className="section-faq" id="faq">
            <div className="container">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="w-dyn-list">
                <div className="faq w-dyn-items">
                  <div className="faq__item w-dyn-item">
                    <div className="faq__dropdown w-dropdown" data-delay={0}>
                      <div className="faq__dropdown__toggle w-dropdown-toggle">
                        <div className="faq__question">
                          <div />
                        </div>
                        <div className="icon w-icon-dropdown-toggle" />
                      </div>
                      <nav className="faq__dropdown-content w-dropdown-list">
                        <div className="common-heading">answer:</div>
                        <p className="common-copy" />
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <section className="section-newsletter">
          <div className="container">
            <div className="common-title">Subscribe to our email digest to discover fresh spreadsheets.</div><a className="btn-subscribe btn-subscribe--large" href="subscribe.html">Subscribe</a>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
