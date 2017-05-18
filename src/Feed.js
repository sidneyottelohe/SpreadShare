import React, { Component } from 'react';

import FeedItem from './FeedItem';

class Feed extends Component {
  render() {
    return (
      <div className="feed">
        <div className="feed__content">
          <div className="w-dyn-list">
            <div className="feed__list w-dyn-items">
              {
                this.props.sheets.map(function(sheet, idx) {
                  return <FeedItem sheet={sheet} key={idx}/>
                })
              }
            </div>
            <div className="w-dyn-empty">
              <div>No spreadsheets found.</div>
            </div>
          </div>
        </div>
        <aside className="feed__aside">
          <div className="filter-menu">
            <div className="filter-menu-header w-hidden-small w-hidden-tiny">
              <div>Search Feed</div>
            </div>
            <div className="filter-menu-wrap w-hidden-small w-hidden-tiny" id="search">
              <div className="w-embed">
                <input type="text" className="w-input quicksearch" id="quicksearch" placeholder="Search Spreadsheets..." />
              </div>
            </div>
            <div className="filter-menu-header">
              <div>sort feed</div>
            </div>
            <div className="filter-menu-wrap" id="sort">
              <div className="w-embed">
                <button className="button recent is-checked" data-filter="*">Recently Added</button>
                <button className="button popular" data-sort-by="number">Popular</button>
              </div>
            </div>
            <div className="filter-menu-header">
              <div>filter by category</div>
            </div>
            <div className="filter-menu-wrap" id="filters">
              <div className="w-embed">
                <button className="button is-checked" data-filter="*">All</button>
                <button className="button" data-filter=".finance">Finance</button>
                <button className="button" data-filter=".product">Product</button>
                <button className="button" data-filter=".people">People</button>
                <button className="button" data-filter=".growth">Growth</button>
                <button className="button" data-filter=".inspiration">Inspiration</button>
                <button className="button" data-filter=".tech">Tech</button>
                <button className="button" data-filter=".business">Business</button>
                <button className="button" data-filter=".operations">Operations</button>
                <button className="button" data-filter=".data">Data</button>
              </div>
            </div>
          </div>
          <div className="digest-card w-hidden-small w-hidden-tiny">
            <div className="digest-card__title">Get updates in your inbox</div>
            <div className="digest-card__close" data-ix="close-digest-card">x</div><a className="btn-subscribe" href="subscribe.html">Subscribe</a>
          </div>
        </aside>
      </div>
    );
  }
}

export default Feed;
