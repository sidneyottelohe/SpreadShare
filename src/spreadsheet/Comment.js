import React, { Component } from 'react'

class Comment extends Component {
  render() {
    const comment = this.props.comment
    return(
      <div className="comment">
        <div className="comment__avatar" />
        <div className="comment__main">
          <div className="comment__heading">
            <div className="comment__user-name">{comment.author}</div>
            <div className="comment__user-title">Product &amp; UI Design</div>
          </div>
          <p className="comment__body">{comment.body}</p>
          <div className="comment__meta">
            <div className="comment__meta__pill">
              <div className="comment__vote__toggle" />
              <div className="comment__vote__count">0</div>
            </div>
            <div className="comment__meta__pill"><img alt='icon' className="comment__meta__pill__icon" src="images/comment.svg" />
              <div className="comment__meta__button">Reply</div>
            </div>
            <div className="comment__meta__pill"><img alt='icon' className="comment__meta__pill__icon" src="images/twitter.svg" />
              <div className="comment__meta__button">Twitter</div>
            </div>
            <div className="comment__meta__pill"><img alt='icon' className="comment__meta__pill__icon" src="images/facebook.svg" />
              <div className="comment__meta__button">facebook</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment
