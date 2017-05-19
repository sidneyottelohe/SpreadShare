import React, { Component } from 'react';

import FeedItem from './FeedItem';
import Feed from './Feed';

class Spreadsheet extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="section-hero">
            <div className="hero">
              <div className="container">
                <h1 className="hero__heading">VC Finder (New York)</h1>
                <div className="hero__sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris arcu, pellentesque eu rhoncus ut.</div><a className="btn btn--open-spreadsheet">Go to Spreadsheet</a>
              </div>
            </div>
          </div>
        </header>
        <main className="main">
          <section className="section-sheet-overview">
            <div className="container">
              <div className="grid">
                <div className="grid__content">
                  <div className="grid__header">Discussion</div>
                  <div className="discussion" id="disqus_thread" />
                </div>
                <aside className="grid__menu">
                  <div className="grid__header">Contributors</div>
                  <div className="aside-ui">
                    <div className="asside-ui__header">
                      <div className="asside-ui__header__title">shared By</div>
                    </div>
                    <div className="asside-ui__link-block"><img className="avatar" src="images/benjo.jpeg" />
                      <div className="asside-ui__link-block__text">Benjo Libor</div>
                    </div>
                  </div>
                  <div className="aside-ui">
                    <div className="asside-ui__header">
                      <div>Created by</div>
                    </div>
                    <div className="asside-ui__link-block"><img className="avatar" src="images/benjo.jpeg" />
                      <div className="asside-ui__link-block__text">Benjo Libor</div>
                    </div>
                    <div className="asside-ui__link-block"><img className="avatar" src="images/profile-color.jpg" />
                      <div className="asside-ui__link-block__text">Sidney Ottelohé</div>
                    </div>
                    <div className="asside-ui__link-block"><img className="avatar" sizes="30px" src="images/webflow.jpg" srcSet="images/webflow-p-500x500.jpeg 500w, images/webflow.jpg 512w" />
                      <div className="asside-ui__link-block__text">Webflow Inc</div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
          <div className="section-similar-content">
            <div className="container">
              <div className="common-title common-title--smal-dark">More Spreadsheets like this</div>
              <div className="scroll">
                <div className="grid__scroll-end grid__scroll-end--left" />
                <div className="grid grid--scrollabe">
                  <div className="grid__item">
                    <a className="card w-inline-block" href="sheet-detail-page.html">
                      <div className="card__header">
                        <div className="card__header__title">VC Finder (New York)</div>
                      </div>
                      <div className="card__main">
                        <div className="card__main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris arcu, pellentesque eu rhoncus ut, porta in ex</div>
                      </div>
                      <div className="card__footer">
                        <div className="card__footer__meta">
                          <div className="meta__data">
                            <div className="meta__data__tag">Finance</div>
                          </div>
                          <div className="meta__data"><img className="meta__data__icon" src="images/view.svg" />
                            <div className="meta__data__text">10k</div>
                          </div>
                          <div className="meta__data meta__data--last"><img className="meta__data__icon" src="images/comment.svg" />
                            <div className="meta__data__text">23</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="grid__item">
                    <a className="card w-inline-block" href="sheet-detail-page.html">
                      <div className="card__header">
                        <div className="card__header__title">VC Finder (New York)</div>
                      </div>
                      <div className="card__main">
                        <div className="card__main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris arcu, pellentesque eu rhoncus ut, porta in ex</div>
                      </div>
                      <div className="card__footer">
                        <div className="card__footer__meta">
                          <div className="meta__data">
                            <div className="meta__data__tag">Finance</div>
                          </div>
                          <div className="meta__data"><img className="meta__data__icon" src="images/view.svg" />
                            <div className="meta__data__text">10k</div>
                          </div>
                          <div className="meta__data meta__data--last"><img className="meta__data__icon" src="images/comment.svg" />
                            <div className="meta__data__text">23</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="grid__item">
                    <a className="card w-inline-block" href="sheet-detail-page.html">
                      <div className="card__header">
                        <div className="card__header__title">VC Finder (New York)</div>
                      </div>
                      <div className="card__main">
                        <div className="card__main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris arcu, pellentesque eu rhoncus ut, porta in ex</div>
                      </div>
                      <div className="card__footer">
                        <div className="card__footer__meta">
                          <div className="meta__data">
                            <div className="meta__data__tag">Finance</div>
                          </div>
                          <div className="meta__data"><img className="meta__data__icon" src="images/view.svg" />
                            <div className="meta__data__text">10k</div>
                          </div>
                          <div className="meta__data meta__data--last"><img className="meta__data__icon" src="images/comment.svg" />
                            <div className="meta__data__text">23</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="grid__item">
                    <a className="card w-inline-block" href="sheet-detail-page.html">
                      <div className="card__header">
                        <div className="card__header__title">VC Finder (New York)</div>
                      </div>
                      <div className="card__main">
                        <div className="card__main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris arcu, pellentesque eu rhoncus ut, porta in ex</div>
                      </div>
                      <div className="card__footer">
                        <div className="card__footer__meta">
                          <div className="meta__data">
                            <div className="meta__data__tag">Finance</div>
                          </div>
                          <div className="meta__data"><img className="meta__data__icon" src="images/view.svg" />
                            <div className="meta__data__text">10k</div>
                          </div>
                          <div className="meta__data meta__data--last"><img className="meta__data__icon" src="images/comment.svg" />
                            <div className="meta__data__text">23</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="grid__item">
                    <a className="card w-inline-block" href="sheet-detail-page.html">
                      <div className="card__header">
                        <div className="card__header__title">VC Finder (New York)</div>
                      </div>
                      <div className="card__main">
                        <div className="card__main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris arcu, pellentesque eu rhoncus ut, porta in ex</div>
                      </div>
                      <div className="card__footer">
                        <div className="card__footer__meta">
                          <div className="meta__data">
                            <div className="meta__data__tag">Finance</div>
                          </div>
                          <div className="meta__data"><img className="meta__data__icon" src="images/view.svg" />
                            <div className="meta__data__text">10k</div>
                          </div>
                          <div className="meta__data meta__data--last"><img className="meta__data__icon" src="images/comment.svg" />
                            <div className="meta__data__text">23</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="grid__scroll-end grid__scroll-end--right" />
              </div>
            </div>
          </div>
          <section className="section-newsletter">
            <div className="container">
              <div className="common-title">Subscribe to our newsletter and discover new Spreadsheet every week!</div>
              <div className="newsletter-form-wrapper w-form">
                <form className="newsletter-form" data-name="Email Form" id="email-form" name="email-form">
                  <input className="form__input w-input" data-name="Email 3" id="email-3" maxLength={256} name="email-3" placeholder="Enter your email address" required="required" type="email" />
                  <input className="submit-button w-button" data-wait="Please wait..." type="submit" defaultValue="Submit" />
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Spreadsheet;
