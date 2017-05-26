import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Spreadsheet extends Component {
  render() {
    this.props.store.currentPath = this.props.match.params
    const { currentSheet } = this.props.store
    return (
      <div>
        <header className="header header--detail">
          <div className="container container--align-left">
            <div className="header__main">
              <div className="header__main__details">
                <h1 className="header__heading">SF based Startup Incubators</h1>
                <div className="header__sub-heading header__sub-heading--stop">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris arcu, pellentesque eu rhoncus ut, porta in ex. Pellentesque leo mi, finibus sed dolor.</div>
                <div className="pill-group pill-group--header">
                  <div className="pill__meta">Category</div>
                  <div className="pill__meta pill__meta--format">Type[Format]</div>
                </div>
                <div className="div-block-2"><a className="button button--sheets" href="#">➜ OPEN SPREADSHEET</a>
                </div>
              </div>
              <div className="header__main__actions">
                <div className="vote-toggle">25</div>
                <div className="flag" />
              </div>
            </div>
          </div>
        </header>
        <main className="main">
          <section className="section">
            <div className="container">
              <div className="content-wrapper">
                <div className="content">
                  <h2 className="content__heading">Discussion</h2>
                  <div className="comments">
                    <div className="comment">
                      <div className="comment__avatar" />
                      <div className="comment__main">
                        <div className="comment__heading">
                          <div className="comment__user-name">Sidney Ottelohe •</div>
                          <div className="comment__user-title">Product &amp; UI Design</div>
                        </div>
                        <p className="comment__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a className="comment__body__link">Suspendisse</a> varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        <div className="comment__meta">
                          <div className="comment__meta__pill">
                            <div className="comment__vote__toggle" />
                            <div className="comment__vote__count">0</div>
                          </div>
                          <div className="comment__meta__pill"><img alt='icon' className="comment__meta__pill__icon" src="images/comment.svg" />
                            <div className="comment__meta__button">Reply</div>
                          </div>
                          <div className="comment__meta__pill"><img alt='icon' className="comment__meta__pill__icon" src="images/twitter.svg" />
                            <div className="comment__meta__button">Twitter</div>
                          </div>
                          <div className="comment__meta__pill"><img alt='icon' className="comment__meta__pill__icon" src="images/facebook.svg" />
                            <div className="comment__meta__button">facebook</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment">
                      <div className="comment__avatar" />
                      <div className="comment__main">
                        <div className="comment__heading">
                          <div className="comment__user-name">Sidney Ottelohe •</div>
                          <div className="comment__user-title">Product &amp; UI Design</div>
                        </div>
                        <p className="comment__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        <div className="comment__meta">
                          <div className="comment__meta__pill">
                            <div className="comment__vote__toggle" />
                            <div className="comment__vote__count">0</div>
                          </div>
                          <div className="comment__meta__pill"><img alt='icon' className="comment__meta__pill__icon" src="images/comment.svg" />
                            <div className="comment__meta__button">Reply</div>
                          </div>
                          <div className="comment__meta__pill"><img alt='icon' className="comment__meta__pill__icon" src="images/twitter.svg" />
                            <div className="comment__meta__button">Twitter</div>
                          </div>
                          <div className="comment__meta__pill"><img alt='icon' className="comment__meta__pill__icon" src="images/facebook.svg" />
                            <div className="comment__meta__button">facebook</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment">
                      <div className="comment__avatar" />
                      <div className="comment__main">
                        <div className="comment__heading">
                          <div className="comment__user-name">Sidney Ottelohe •</div>
                          <div className="comment__user-title">Product &amp; UI Design</div>
                        </div>
                        <p className="comment__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        <div className="comment__meta">
                          <div className="comment__meta__pill">
                            <div className="comment__vote__toggle" />
                            <div className="comment__vote__count">0</div>
                          </div>
                          <div className="comment__meta__pill"><img alt='icon' className="comment__meta__pill__icon" src="images/comment.svg" />
                            <div className="comment__meta__button">Reply</div>
                          </div>
                          <div className="comment__meta__pill"><img alt='icon' className="comment__meta__pill__icon" src="images/twitter.svg" />
                            <div className="comment__meta__button">Twitter</div>
                          </div>
                          <div className="comment__meta__pill"><img alt='icon' className="comment__meta__pill__icon" src="images/facebook.svg" />
                            <div className="comment__meta__button">facebook</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="content__heading">Discussion</h2>
                  <div className="comment-form">
                    <div className="comment__avatar" />
                    <div className="comment__main w-clearfix">
                      <div className="comment__heading">
                        <div className="comment__user-name">Sidney Ottelohe •</div>
                        <div className="comment__user-title">Product &amp; UI Design</div>
                      </div>
                      <div className="comment-form__input">Enter a comment...</div><a className="comment-form__submit" href="#">Comment</a>
                    </div>
                  </div>
                </div>
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
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Spreadsheet;
