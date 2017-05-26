import React, { Component } from 'react';

import Feed from './Feed';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <h1 className="header__heading">Find and Share&nbsp;Spreadsheets.</h1>
            <div className="header__sub-heading">Explore community-curated spreadsheets for startups and professionals.</div>
          </div>
        </header>
        <main className="main">
          <section className="section">
            <div className="container">
              <Feed {...this.props}/>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
