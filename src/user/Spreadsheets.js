import React, { Component } from 'react'
import { observer } from 'mobx-react';

import Spreadsheet from './Spreadsheet'

@observer
class Spreadsheets extends Component {
  render() {
    const userSheets = this.props.store.userSheets
    return(
      <div className="user-view">
        <div className="user-view__heading"><span className="user-view__heading--count">25</span>&nbsp;Spreadsheets Upvoted</div>
        <ul className="list w-list-unstyled">
          {
            userSheets.map(sheet => {
              return <Spreadsheet sheet={sheet} key={sheet.id}/>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Spreadsheets
