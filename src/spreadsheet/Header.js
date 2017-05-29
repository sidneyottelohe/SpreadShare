import React, { Component } from 'react'
import { observer } from 'mobx-react';

@observer
class Header extends Component {
  upvote() {
    this.props.store.sheet.upvote()
  }
  render() {
    const sheet = this.props.store.sheet
    return(
      <header className="header header--detail">
        <div className="container container--align-left">
          <div className="header__main">
            <div className="header__main__details">
              <h1 className="header__heading">
                {sheet.title}
              </h1>
              <div className="header__sub-heading header__sub-heading--stop">
                {sheet.description}
              </div>
              <div className="pill-group pill-group--header">
                <div className="pill__meta">
                  {sheet.category}
                </div>
                <div className="pill__meta pill__meta--format">Type[Format]</div>
              </div>
              <div className="div-block-2">
                <a
                  className="button button--sheets"
                  href={sheet.url}
                  target='_blank'
                >
                    ➜ OPEN SPREADSHEET
                </a>
              </div>
            </div>
            <div
              className="header__main__actions"
              onClick={this.upvote.bind(this)}
            >
              <div className="vote-toggle">{sheet.upvotes_count}</div>
              <div className="flag" />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
