import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

@observer
class FeedItem extends Component {
  upvote() {
    this.props.store.upvoteSheet(this.props.sheet.id)
  }
  render() {
    const sheet = this.props.sheet
    return (
      <li className="list__item">
        <div className="card">
          <div className="card__main">
            <div>
              <Link to={`/spreadsheet/${sheet.id}`}>
                <span className="card__main__heading__link w-inline-block">
                  <h2 className="card__main__heading">
                    { sheet.title }
                  </h2>
                </span>
              </Link>
              <div className="card__main__sub-heading">{sheet.description}</div>
            </div>
            <div className="card__vote__toggle" onClick={this.upvote.bind(this)}>{sheet.upvotes_count}</div>
          </div>
          <div className="card__meta"><a className="card__meta__category" href="#">{sheet.tag}</a>
            <div className="card__meta__pill card__meta__pill--type">list [websites]</div>
            <div className="card__meta__pill card__meta__pill--comments">{sheet.comments.length} comments</div>
          </div>
        </div>
      </li>
    );
  }
}

export default FeedItem;
