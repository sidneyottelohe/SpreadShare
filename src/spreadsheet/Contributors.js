import React, { Component } from 'react'

import image from '../images/profile-color.jpg'

class Contributors extends Component {
  render() {
    const { sheet } = this.props.store
    // TODO: this is just a hack for right now
    const contributors = sheet.user ? [sheet.user] : []
    return(
      <div className="side-bar__group">
        <h3 className="content__heading">Contributors</h3>
        <div className="contributors">
          {
            contributors.map(contributor => {
              return(
                <div className="contributor" key={contributor.id}>
                  <img
                    alt='icon'
                    className="contributor__avatar"
                    src={image}
                  />
                  <div className="contributor__main">
                    <div className="contributor__name">
                      {contributor.name}
                    </div>
                    <div className="contributor__tagline">
                      Product &amp; UI Design
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Contributors
