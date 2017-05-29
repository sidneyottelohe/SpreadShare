import React, { Component } from 'react'

import Tags from './Tags'
import Contributors from './Contributors'

class Sidebar extends Component {
  render() {
    return(
      <aside className="side-bar">
        <Contributors {...this.props} />
        <Tags {...this.props} />
        <div className="side-bar__group">
          <h3 className="content__heading">Share This sheet</h3>
          <div className="share-box">
            <div className="share-box__button share-box__button--twitter" />
            <div className="share-box__button share-box__button--facebook" />
            <div className="share-box__button share-box__button--hacker-news" />
            <div className="share-box__button share-box__button--mail" />
          </div>
        </div>
      </aside>
    )
  }
}

export default Sidebar
