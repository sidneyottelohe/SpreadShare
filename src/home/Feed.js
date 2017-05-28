import React, { Component } from 'react';
import { observer } from 'mobx-react';

import FeedItem from './FeedItem';
import FeedSideMenu from './FeedSideMenu';

@observer
class Feed extends Component {
  render() {
    const { filteredSheets } = this.props.store
    return (
      <div className="content-wrapper">
        <div className="content">
          <ul className="list w-list-unstyled">
            {
              (filteredSheets.length > 0) ?
                filteredSheets.map(function(sheet, idx) {
                  return <FeedItem
                            {...this.props}
                            sheet={sheet}
                            key={idx}/>
                }.bind(this)) : <div className="w-dyn-empty"><div>No items found.</div></div>
            }
          </ul>
        </div>
        <FeedSideMenu {...this.props}/>
      </div>
    );
  }
}

export default Feed;
