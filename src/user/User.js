import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div>
        <header className="header header--user">
          <div className="container">
            <div className="user-content-wrapper"><img alt='icon' className="user__avatar" src="images/profile-color.jpg" />
              <div className="user__main">
                <div>
                  <h1 className="user__name">Sidney Ottelohe</h1>
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
                <div className="side-bar">
                  <div className="side-bar__group">
                    <div className="user-view__menu"><a className="user-view__togge--active user-view__toggle" href="#"><span className="span__count">25</span> Upvoted</a><a className="user-view__toggle" href="#"><span className="span__count">25</span>&nbsp;created</a><a className="user-view__toggle" href="#"><span className="span__count">25</span>&nbsp;submitted</a>
                      <div className="divider" /><a className="user-view__toggle" href="#"><span className="span__count">207</span>&nbsp;following</a><a className="user-view__toggle" href="#"><span className="span__count">795</span> followers</a>
                      <div className="divider" />
                      <p className="user__bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse varius enim in eros elementum tristique.</p><a className="user__link user__link--twitter" href="#">Twitter</a><a className="user__link user__link--facebook" href="#">Facebook</a><a className="user__link" href="#">Github</a>
                      <div className="divider" /><a className="user-view__toggle user-views__toggle--edit" href="#">edit account</a>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="user-view">
                    <div className="user-view__heading"><span className="user-view__heading--count">25</span>&nbsp;Spreadsheets Upvoted</div>
                    <ul className="list w-list-unstyled">
                      <li className="list__item list__item--detail">
                        <div className="card">
                          <div className="card__main">
                            <div><a className="card__main__heading__link w-inline-block" href="spreadsheet-detail-page.html"><h2 className="card__main__heading">The Ultimate Front-End Development List</h2></a>
                              <div className="card__main__sub-heading">Cheat sheets, checklists, colors, command lines, CMS, CSS, JS, Icons, and more!</div>
                            </div>
                            <div className="card__vote__toggle">25</div>
                          </div>
                          <div className="card__meta"><a className="card__meta__category" href="#">Category</a>
                            <div className="card__meta__pill card__meta__pill--type">list [websites]</div>
                            <div className="card__meta__pill card__meta__pill--comments">0 comments</div>
                          </div>
                        </div>
                      </li>
                      <li className="list__item list__item--detail">
                        <div className="card">
                          <div className="card__main">
                            <div><a className="card__main__heading__link w-inline-block" href="spreadsheet-detail-page.html"><h2 className="card__main__heading">The Ultimate Front-End Development List</h2></a>
                              <div className="card__main__sub-heading">Cheat sheets, checklists, colors, command lines, CMS, CSS, JS, Icons, and more!</div>
                            </div>
                            <div className="card__vote__toggle card__vote__toggle--active">25</div>
                          </div>
                          <div className="card__meta"><a className="card__meta__category" href="#">Category</a>
                            <div className="card__meta__pill card__meta__pill--type">list [websites]</div>
                            <div className="card__meta__pill card__meta__pill--comments">0 comments</div>
                          </div>
                        </div>
                      </li>
                      <li className="list__item list__item--detail">
                        <div className="card">
                          <div className="card__main">
                            <div><a className="card__main__heading__link w-inline-block" href="spreadsheet-detail-page.html"><h2 className="card__main__heading">The Ultimate Front-End Development List</h2></a>
                              <div className="card__main__sub-heading">Cheat sheets, checklists, colors, command lines, CMS, CSS, JS, Icons, and more!</div>
                            </div>
                            <div className="card__vote__toggle">25</div>
                          </div>
                          <div className="card__meta"><a className="card__meta__category" href="#">Category</a>
                            <div className="card__meta__pill card__meta__pill--type">list [websites]</div>
                            <div className="card__meta__pill card__meta__pill--comments">0 comments</div>
                          </div>
                        </div>
                      </li>
                      <li className="list__item list__item--detail">
                        <div className="card">
                          <div className="card__main">
                            <div><a className="card__main__heading__link w-inline-block" href="spreadsheet-detail-page.html"><h2 className="card__main__heading">The Ultimate Front-End Development List</h2></a>
                              <div className="card__main__sub-heading">Cheat sheets, checklists, colors, command lines, CMS, CSS, JS, Icons, and more!</div>
                            </div>
                            <div className="card__vote__toggle">25</div>
                          </div>
                          <div className="card__meta"><a className="card__meta__category" href="#">Category</a>
                            <div className="card__meta__pill card__meta__pill--type">list [websites]</div>
                            <div className="card__meta__pill card__meta__pill--comments">0 comments</div>
                          </div>
                        </div>
                      </li>
                      <li className="list__item list__item--detail">
                        <div className="card">
                          <div className="card__main">
                            <div><a className="card__main__heading__link w-inline-block" href="spreadsheet-detail-page.html"><h2 className="card__main__heading">The Ultimate Front-End Development List</h2></a>
                              <div className="card__main__sub-heading">Cheat sheets, checklists, colors, command lines, CMS, CSS, JS, Icons, and more!</div>
                            </div>
                            <div className="card__vote__toggle">25</div>
                          </div>
                          <div className="card__meta"><a className="card__meta__category" href="#">Category</a>
                            <div className="card__meta__pill card__meta__pill--type">list [websites]</div>
                            <div className="card__meta__pill card__meta__pill--comments">0 comments</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
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
