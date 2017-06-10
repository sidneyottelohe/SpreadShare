import React, { Component } from 'react';
import { observer } from 'mobx-react';

import RelatedSpreadsheet from './RelatedSpreadsheet'

import benjoImage from './images/benjo.jpeg'

@observer
class Spreadsheet extends Component {
  render() {
    var currentSheetId = Number(this.props.match.params.name)
    if (currentSheetId !== this.props.viewStore.sheet) {
      this.props.viewStore.sheet = currentSheetId
    }
    const { sheet } = this.props.store
    const contributors = sheet.contributors || []
    const creators = sheet.creators || []
    const related_spreadsheets = sheet.related_spreadsheets || []
    console.log(sheet);
    return (
      <div>
        <header>
          <div className="section-hero">
            <div className="hero">
              <div className="container">
                <h1 className="hero__heading">{ sheet.title }</h1>
                <div className="hero__sub-heading">{ sheet.description }</div>
                <a className="btn btn--open-spreadsheet" target='_blank' href={sheet.url}>Go to Spreadsheet</a>
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
                    {
                      contributors.map((contributor, idx) => {
                        return(
                          <div className="asside-ui__link-block" key={idx}>
                            <img className="avatar" src={benjoImage} alt='benjo'/>
                            <div className="asside-ui__link-block__text">{contributor.name}</div>
                          </div>
                        )
                      })
                    }

                  </div>
                  <div className="aside-ui">
                    <div className="asside-ui__header">
                      <div>Created by</div>
                    </div>
                    {
                      creators.map((creator, idx) => {
                        return(
                          <div className="asside-ui__link-block" key={idx}>
                            <img className="avatar" src={benjoImage} alt='benjo'/>
                            <div className="asside-ui__link-block__text">{creator.name}</div>
                          </div>
                        )
                      })
                    }
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
                  {
                    related_spreadsheets.map((spreadsheet, idx) => {
                      return <RelatedSpreadsheet key={idx} sheet={spreadsheet} />
                    })
                  }
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
