import React, { Component } from 'react';
import { observer } from 'mobx-react';

import FeedItem from './FeedItem';
import FeedSideMenu from './FeedSideMenu';

@observer
class Feed extends Component {
  render() {
    const { filteredSheets } = this.props.store
    return (
      <div className="feed">
        <div className="feed__content">
          <div className="w-dyn-list">
            <div className="feed__list w-dyn-items">
              {
                (filteredSheets.length > 0)
                  ? filteredSheets.map(function(sheet, idx) {
                      return <FeedItem sheet={sheet} key={idx}/>
                    })
                  : <div className="w-dyn-empty">
                      <div>No items found.</div>
                    </div>
              }
            </div>
          </div>
        </div>
        <FeedSideMenu {...this.props}/>
      </div>
    );
  }
}

export default Feed;
