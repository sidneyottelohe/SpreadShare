import React, { Component } from 'react';

import FeedItem from './FeedItem';
import Feed from './Feed';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="section-hero">
          <div className="hero">
            <div className="container">
              
            <h1 className="hero__heading">Find and Share&nbsp;Spreadsheets.</h1>
            <div className="hero__sub-heading">Explore community-curated spreadsheets for startups and professionals.</div>
            </div>
          </div>
        </div>
        <main className="main">
          <div className="section-main">
            <div className="container">
              <Feed sheets={this.props.sheets}/>
            </div>
          </div>
          <section className="section-newsletter">
            <div className="container">
              <div className="common-title">Subscribe to our email digest to discover fresh spreadsheets.</div><a className="btn-subscribe btn-subscribe--large" href="subscribe.html">Subscribe</a>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
