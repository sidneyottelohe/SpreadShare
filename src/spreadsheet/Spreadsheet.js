import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Header from './Header'
import Sidebar from './Sidebar'
import Discussion from './Discussion'

@observer
class Spreadsheet extends Component {
  render() {
    if (Number(this.props.match.params.name) !== this.props.store.sheet.id) {
      this.props.store.changeSheet(this.props.match.params.name)
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
    );
  }
}

export default Spreadsheet;
