import React, { Component } from 'react'

import Comment from './Comment'

class Discussion extends Component {
  render() {
    return(
      <div className="content">
        <h2 className="content__heading">Discussion</h2>
        <div className="comments">
          {
            this.props.store.currentSheet.comments.map(function(comment, idx) {
              return <Comment key={idx} comment={comment} />
            })
          }
        </div>
        <h2 className="content__heading">Discussion</h2>
        <div className="comment-form">
          <div className="comment__avatar" />
          <div className="comment__main w-clearfix">
            <div className="comment__heading">
              <div className="comment__user-name">Sidney Ottelohe •</div>
              <div className="comment__user-title">Product &amp; UI Design</div>
            </div>
            <div className="comment-form__input">Enter a comment...</div><a className="comment-form__submit" href="#">Comment</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Discussion
