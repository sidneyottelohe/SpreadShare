import React, { Component } from 'react'

class Spreadsheet extends Component {
  render() {
    const sheet = this.props.sheet
    return(
      <li className="list__item list__item--detail">
        <div className="card">
          <div className="card__main">
            <div><a className="card__main__heading__link w-inline-block" href="spreadsheet-detail-page.html"><h2 className="card__main__heading">{sheet.title}</h2></a>
              <div className="card__main__sub-heading">{sheet.description}</div>
            </div>
            <div className="card__vote__toggle">{sheet.upvotes_count}</div>
          </div>
          <div className="card__meta"><a className="card__meta__category" href="#">{sheet.category}</a>
            <div className="card__meta__pill card__meta__pill--type">{sheet.format} [{sheet.category}]</div>
            <div className="card__meta__pill card__meta__pill--comments">{sheet.comments.length} comments</div>
          </div>
        </div>
      </li>
    )
  }
}

export default Spreadsheet
