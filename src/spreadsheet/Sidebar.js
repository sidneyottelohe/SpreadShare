import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return(
      <aside className="side-bar">
        <div className="side-bar__group">
          <h3 className="content__heading">Contributors</h3>
          <div className="contributors">
            <div className="contributor"><img alt='icon' className="contributor__avatar" src="images/profile-color.jpg" />
              <div className="contributor__main">
                <div className="contributor__name">Sidney Ottelohe</div>
                <div className="contributor__tagline">Product &amp; UI Design</div>
              </div>
            </div>
            <div className="contributor"><img alt='icon' className="contributor__avatar" src="images/profile-color.jpg" />
              <div className="contributor__main">
                <div className="contributor__name">Sidney Ottelohe</div>
                <div className="contributor__tagline">Product &amp; UI Design</div>
              </div>
            </div>
            <div className="contributor"><img alt='icon' className="contributor__avatar" src="images/profile-color.jpg" />
              <div className="contributor__main">
                <div className="contributor__name">Sidney Ottelohe</div>
                <div className="contributor__tagline">Product &amp; UI Design</div>
              </div>
            </div>
            <div className="contributor"><img alt='icon' className="contributor__avatar" src="images/profile-color.jpg" />
              <div className="contributor__main">
                <div className="contributor__name">Sidney Ottelohe</div>
                <div className="contributor__tagline">Product &amp; UI Design</div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-bar__group">
          <h3 className="content__heading">tags</h3>
          <div className="tags">
            <div className="tag">Topic One</div>
            <div className="tag">Topic Two</div>
            <div className="tag">Topic Three</div>
            <div className="tag">Topic Four</div>
            <div className="tag">Topic Five</div>
            <div className="tag">Topic Six</div>
            <div className="tag">Topic Seven</div>
            <div className="tag">Topic Eight</div>
          </div>
        </div>
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
