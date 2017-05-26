import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Header from './Header'
import Sidebar from './Sidebar'
import Discussion from './Discussion'

@observer
class Spreadsheet extends Component {
  render() {
    this.props.store.currentPath = this.props.match.params
    const { currentSheet } = this.props.store
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
    );
  }
}

export default Spreadsheet;
