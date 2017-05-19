import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeedItem extends Component {
  render() {
  const sheet = this.props.sheet;
    return (
      <div className="feed__list__item w-dyn-item">
        <div className="card">
          <div className="featured-tag">staff pick 👏</div>
          <div className="card__header">
            <div className="card__header__flex-wrapper">
              <div className="vote-btn">
                <div className="vote-btn__count">{sheet.upvotes}</div>
              </div>
              <Link to="/spreadsheet/blahblah">
                <a className="card__header__title truncate" >{sheet.name}</a>
              </Link>
            </div>
            <div className="card__main__text">{sheet.description}</div>
          </div>
          <div className="card__footer">
            <div className="card__footer__meta">
              <div className="meta__data">
                <div className="meta__data__tag">{sheet.tag}</div>
              </div>
              <div className="meta__data">
                <img className="meta__data__icon" src="images/spreadsheet.svg" width={11} />
                <div className="meta__data__text">LIST</div>
                <div className="meta__data__text">[</div>
                <div className="meta__data__text meta__data__text--parenthesis">Organizations</div>
                <div className="brace meta__data__text">]</div>
              </div>
              <div className="meta__data meta__data--last"><img className="meta__data__icon" src="images/comment.svg" width={11} />
                <div className="w-embed">
                  <div className="meta__data__text"><a className="comment-url" href="/spreadsheet/#disqus_thread" data-disqus-identifier>{sheet.comments} comments</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="category-tag" />
      </div>
    );
  }
}

export default FeedItem;
