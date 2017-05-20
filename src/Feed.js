import React, { Component } from 'react';

import FeedItem from './FeedItem';
import FeedSideMenu from './FeedSideMenu';

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
              <div>No items found.</div>
            </div>
          </div>
        </div>
        <FeedSideMenu />
      </div>
    );
  }
}

export default Feed;
