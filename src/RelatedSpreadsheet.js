import React, { Component } from 'react';

import viewImage from './images/view.svg'
import commentImage from './images/comment.svg'

class RelatedSpreadsheet extends Component {
  render() {
    const sheet = this.props.sheet
    return (
      <div className="grid__item">
        <a className="card w-inline-block" href="sheet-detail-page.html">
          <div className="card__header">
            <div className="card__header__title">{sheet.title}</div>
          </div>
          <div className="card__main">
            <div className="card__main__text">{sheet.description}</div>
          </div>
          <div className="card__footer">
            <div className="card__footer__meta">
              <div className="meta__data">
                <div className="meta__data__tag">{sheet.category}</div>
              </div>
              <div className="meta__data"><img className="meta__data__icon" src={viewImage} alt='view-icon'/>
                <div className="meta__data__text">10k</div>
              </div>
              <div className="meta__data meta__data--last"><img className="meta__data__icon" src={commentImage} alt='comment-icon'/>
                <div className="meta__data__text">23</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default RelatedSpreadsheet;
