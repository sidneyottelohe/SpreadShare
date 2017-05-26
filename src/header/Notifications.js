import React, { Component} from 'react';
import { observer } from 'mobx-react';
import onClickOutside from 'react-onclickoutside'

import Notification from './Notification'

@observer
class Notifications extends Component {
  openDropdown() {
    this.props.viewStore.notificationsOpen = !this.props.viewStore.notificationsOpen
  }
  handleClickOutside = evt => {
    this.props.viewStore.notificationsOpen = false
  }
  openClass() {
    return this.props.viewStore.notificationsOpen ? ' w--open' : ''
  }
  render() {
    return(
      <div
        className="activity-dropdown w-dropdown"
        data-delay={0}
        onClick={this.openDropdown.bind(this)}
      >
        <div className={`account-dropdown__toggle account-dropdown__toggle--activity w-dropdown-toggle${this.openClass()}`}>
          <div className="account-activity">
            <div className="account-activity__count">1</div>
          </div>
        </div>
        <nav className={`activity-dropdown__menu w-dropdown-list${this.openClass()}`} >
          <div className="account-dropdown__links-pointer" />
          <div
            className="account-activity-wrapper"
          >
            {
              this.props.store.notifications.map(function(notification, idx) {
                return <Notification
                          key={idx}
                          notification={notification}/>
              }.bind(this))
            }
            <div className="account-activity__view-all">View All Activity</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default onClickOutside(Notifications);
