import React, { Component } from 'react';

class Topics extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="section-hero">
            <div className="hero">
              <div className="container">
                <h1 className="hero__heading">SpreadShare Topics</h1>
                <div className="hero__sub-heading">Browse through all categories and topics.</div>
              </div>
            </div>
          </div>
        </header>
        <main className="main">
          <section className="section-main">
            <div className="container">
              <h2 className="section-heading">Categories</h2>
              <div className="w-dyn-list">
                <div className="grid grid--4 w-dyn-items">
                  <div className="grid__item grid__item--4 w-dyn-item">
                    <a className="category-card w-inline-block">
                      <div />
                    </a>
                  </div>
                </div>
                <div className="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-tags">
            <div className="container">
              <h2 className="section-heading">Tags</h2>
              <div className="w-dyn-list">
                <div className="tag-list w-dyn-items">
                  <div className="tag-list__item tag-list__item--4 w-dyn-item">
                    <a className="tag tag--large" />
                  </div>
                </div>
                <div className="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Topics;
