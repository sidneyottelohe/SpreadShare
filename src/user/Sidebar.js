import React, { Component } from 'react'
import { observer } from 'mobx-react';

@observer
class Sidebar extends Component {
  changeFilter(filter) {
    this.props.viewStore.userSheetsFilter = filter
  }
  render() {
    const counts = this.props.store.sheetCounts
    return(
      <div className="side-bar">
        <div className="side-bar__group">
          <div className="user-view__menu">
            <a
              className="user-view__togge--active user-view__toggle"
              onClick={this.changeFilter.bind(this, 'upvoted')}
            >
              <span className="span__count">{counts.upvoted}</span> Upvoted
            </a>
            <a
              className="user-view__toggle"
              onClick={this.changeFilter.bind(this, 'created')}
            >
              <span className="span__count">{counts.created}</span> Created
            </a>
            <a
              className="user-view__toggle"
              onClick={this.changeFilter.bind(this, 'submitted')}
            >
              <span className="span__count">{counts.submitted}</span> Submitted
            </a>
            <div className="divider" />
              <a className="user-view__toggle" href="#">
                <span className="span__count">207</span>&nbsp;following
              </a>
              <a className="user-view__toggle" href="#">
                <span className="span__count">795</span> followers
              </a>
            <div className="divider" />
            <p className="user__bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse varius enim in eros elementum tristique.
            </p>
            <a className="user__link user__link--twitter" href="#">Twitter</a>
            <a className="user__link user__link--facebook" href="#">Facebook</a>
            <a className="user__link" href="#">Github</a>
            <div className="divider" /><a className="user-view__toggle user-views__toggle--edit" href="#">edit account</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
