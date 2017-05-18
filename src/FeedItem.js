import React, { Component } from 'react';

class FeedItem extends Component {
  render() {
    return (
      <div className="feed__list__item w-dyn-item">
        <div className="card">
          <div className="featured-tag">staff pick 👏</div>
          <div className="card__header">
            <div className="card__header__flex-wrapper">
              <div className="vote-btn">
                <div className="vote-btn__count">0</div>
              </div>
              <a className="card__header__title truncate" >{this.props.sheet.name}</a>
            </div>
            <div className="card__main__text" />
          </div>
          <div className="card__footer">
            <div className="card__footer__meta">
              <div className="meta__data">
                <div className="meta__data__tag" />
              </div>
              <div className="meta__data"><img className="meta__data__icon" src="images/spreadsheet.svg" width={11} />
                <div className="meta__data__text" />
                <div className="meta__data__text">[</div>
                <div className="meta__data__text meta__data__text--parenthesis" />
                <div className="brace meta__data__text">]</div>
              </div>
              <div className="meta__data meta__data--last"><img className="meta__data__icon" src="images/comment.svg" width={11} />
                <div className="w-embed">
                  <div className="meta__data__text"><a className="comment-url" href="/spreadsheet/#disqus_thread" data-disqus-identifier>0 comments</a>
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
