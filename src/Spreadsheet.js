import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Spreadsheet extends Component {
  render() {
    this.props.store.currentPath = this.props.match.params
    const { currentSheet } = this.props.store
    return (
      <div>
        <header>
          <div className="section-hero">
            <div className="hero">
              <div className="container">
                <h1 className="hero__heading">{ currentSheet.name }</h1>
                <div className="hero__sub-heading">{ currentSheet.description }</div>
                <a className="btn btn--open-spreadsheet" target='_blank' href={currentSheet.link}>Go to Spreadsheet</a>
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
                    <div className="asside-ui__link-block"><img className="avatar" src="images/benjo.jpeg" alt='benjo'/>
                      <div className="asside-ui__link-block__text">Benjo Libor</div>
                    </div>
                  </div>
                  <div className="aside-ui">
                    <div className="asside-ui__header">
                      <div>Created by</div>
                    </div>
                    <div className="asside-ui__link-block"><img className="avatar" src="images/benjo.jpeg" alt='benjo'/>
                      <div className="asside-ui__link-block__text">Benjo Libor</div>
                    </div>
                    <div className="asside-ui__link-block"><img className="avatar" src="images/profile-color.jpg" alt='profile-color'/>
                      <div className="asside-ui__link-block__text">Sidney Ottelohé</div>
                    </div>
                    <div className="asside-ui__link-block"><img className="avatar" sizes="30px" src="images/webflow.jpg" srcSet="images/webflow-p-500x500.jpeg 500w, images/webflow.jpg 512w" alt='webflow'/>
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
                          <div className="meta__data"><img className="meta__data__icon" src="images/view.svg" alt='view-icon'/>
                            <div className="meta__data__text">10k</div>
                          </div>
                          <div className="meta__data meta__data--last"><img className="meta__data__icon" src="images/comment.svg" alt='comment-icon'/>
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
                          <div className="meta__data"><img className="meta__data__icon" src="images/view.svg" alt='view-icon'/>
                            <div className="meta__data__text">10k</div>
                          </div>
                          <div className="meta__data meta__data--last"><img className="meta__data__icon" src="images/comment.svg" alt='comment-icon'/>
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
                          <div className="meta__data"><img className="meta__data__icon" src="images/view.svg" alt='view-icon'/>
                            <div className="meta__data__text">10k</div>
                          </div>
                          <div className="meta__data meta__data--last"><img className="meta__data__icon" src="images/comment.svg" alt='comment-icon'/>
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
                          <div className="meta__data"><img className="meta__data__icon" src="images/view.svg" alt='view-icon'/>
                            <div className="meta__data__text">10k</div>
                          </div>
                          <div className="meta__data meta__data--last"><img className="meta__data__icon" src="images/comment.svg" alt='comment-icon'/>
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
                          <div className="meta__data"><img className="meta__data__icon" src="images/view.svg" alt='view-icon'/>
                            <div className="meta__data__text">10k</div>
                          </div>
                          <div className="meta__data meta__data--last"><img className="meta__data__icon" src="images/comment.svg" alt='comment-icon'/>
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
        </main>
      </div>
    );
  }
}

export default Spreadsheet;
