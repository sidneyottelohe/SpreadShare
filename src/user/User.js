import React, { Component } from 'react';

import Spreadsheets from './Spreadsheets'
import Sidebar from './Sidebar'

class User extends Component {
  render() {
    const user = this.props.viewStore.currentUser
    return (
      <div>
        <header className="header header--user">
          <div className="container">
            <div className="user-content-wrapper">
              <img alt='icon' className="user__avatar" src="images/profile-color.jpg" />
              <div className="user__main">
                <div>
                  <h1 className="user__name">{user.name}</h1>
                  <div className="user__tagline">Product &amp; UI Design</div><a className="button button--user-follow" href="#">Follow</a>
                </div>
                <div className="header__main__actions">
                  <div className="flag" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="main">
          <section className="section section--user">
            <div className="container">
              <div className="content-wrapper">
                <Sidebar {...this.props} />
                <div className="content">
                  <Spreadsheets {...this.props} />
                  <div className="user-view">
                    <div className="user-view__heading"><span className="user-view__heading--count">207</span>&nbsp;following</div>
                    <div className="followers">
                      <div className="follower__item">
                        <div className="user-card"><img alt='icon' className="user-card__avatar" src="images/profile-color.jpg" />
                          <div className="user-card__main">
                            <div className="user-card__name">Sidney Ottelohe</div>
                            <div className="user-card__tagline">Product &amp; UI Design</div><a className="user-card__button" href="#">Follow</a>
                          </div>
                        </div>
                      </div>
                      <div className="follower__item">
                        <div className="user-card"><img alt='icon' className="user-card__avatar" src="images/profile-color.jpg" />
                          <div className="user-card__main">
                            <div className="user-card__name">Sidney Ottelohe</div>
                            <div className="user-card__tagline">Product &amp; UI Design</div><a className="user-card__button" href="#">Follow</a>
                          </div>
                        </div>
                      </div>
                      <div className="follower__item">
                        <div className="user-card"><img alt='icon' className="user-card__avatar" src="images/profile-color.jpg" />
                          <div className="user-card__main">
                            <div className="user-card__name">Sidney Ottelohe</div>
                            <div className="user-card__tagline">Product &amp; UI Design</div><a className="user-card__button" href="#">Follow</a>
                          </div>
                        </div>
                      </div>
                      <div className="follower__item">
                        <div className="user-card"><img alt='icon' className="user-card__avatar" src="images/profile-color.jpg" />
                          <div className="user-card__main">
                            <div className="user-card__name">Sidney Ottelohe</div>
                            <div className="user-card__tagline">Product &amp; UI Design</div><a className="user-card__button" href="#">Follow</a>
                          </div>
                        </div>
                      </div>
                      <div className="follower__item">
                        <div className="user-card"><img alt='icon' className="user-card__avatar" src="images/profile-color.jpg" />
                          <div className="user-card__main">
                            <div className="user-card__name">Sidney Ottelohe</div>
                            <div className="user-card__tagline">Product &amp; UI Design</div><a className="user-card__button" href="#">Follow</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default User;
