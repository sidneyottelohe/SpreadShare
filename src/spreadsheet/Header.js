import React, { Component } from 'react'

class Header extends Component {
  render() {
    const sheet = this.props.store.currentSheet
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
                <div className="pill__meta">Category</div>
                <div className="pill__meta pill__meta--format">Type[Format]</div>
              </div>
              <div className="div-block-2">
                <a
                  className="button button--sheets"
                  href={sheet.link}
                  target='_blank'
                >
                    ➜ OPEN SPREADSHEET
                </a>
              </div>
            </div>
            <div className="header__main__actions">
              <div className="vote-toggle">{sheet.upvotes}</div>
              <div className="flag" />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
