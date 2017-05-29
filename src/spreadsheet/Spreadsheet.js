import React, { Component } from 'react';

import Header from './Header'
import Sidebar from './Sidebar'
import Discussion from './Discussion'

class Spreadsheet extends Component {
  render() {
    var currentSheetId = Number(this.props.match.params.name)
    if (currentSheetId !== this.props.viewStore.sheet) {
      this.props.viewStore.sheet = currentSheetId
    }
    return (
      <div>
        <Header {...this.props} />
        <main className="main">
          <section className="section">
            <div className="container">
              <div className="content-wrapper">
                <Discussion {...this.props} />
                <Sidebar {...this.props} />
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Spreadsheet;
