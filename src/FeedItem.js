import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

@observer
class FeedItem extends Component {
  upvote() {
    this.props.sheet.upvote()
  }
  render() {
    const sheet = this.props.sheet
    console.log(sheet);
    return (
      <div className="feed__list__item w-dyn-item">
        <div className="card">
          <div className="featured-tag">staff pick 👏</div>
          <div className="card__header">
            <div className="card__header__flex-wrapper">
              <div className="vote-btn" onClick={this.upvote.bind(this)}>
                <div className="vote-btn__count">{sheet.upvotes_count}</div>
              </div>
              <Link to={`/spreadsheet/${sheet.id}`}>
                <span className="card__header__title truncate" >{sheet.title}</span>
              </Link>
            </div>
            <div className="card__main__text">{sheet.description}</div>
          </div>
          <div className="card__footer">
            <div className="card__footer__meta">
              <div className="meta__data">
                {
                  sheet.tag_names.map((tag_name, idx) => {
                    return <div className="meta__data__tag" key={idx}>{tag_name}</div>
                  })
                }
              </div>
              <div className="meta__data">
                <img className="meta__data__icon" src="images/spreadsheet.svg" alt='spreadsheet-icon' width={11} />
                <div className="meta__data__text">{sheet.format}</div>
                <div className="meta__data__text">[</div>
                <div className="meta__data__text meta__data__text--parenthesis">{sheet.category}</div>
                <div className="brace meta__data__text">]</div>
              </div>
              <div className="meta__data meta__data--last"><img className="meta__data__icon" src="images/comment.svg" alt='comment-icon' width={11} />
                <div className="w-embed">
                  <div className="meta__data__text">
                    <a className="comment-url" href="/spreadsheet/#disqus_thread" data-disqus-identifier>
                      0 comments
                    </a>
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
