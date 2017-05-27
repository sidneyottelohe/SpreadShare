import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Notification extends Component {
  render() {
    const notification = this.props.notification
    return(
      <div className="account-activity__item">
        <div className="account-activity__item__inner">
          <Link to={notification.link}>
            <span className="account-activity__item__inner--link">
              {notification.body}
            </span>
          </Link>
        </div>
        <div className="account-activity__item__meta">
          {notification.created_at}
        </div>
      </div>
    )
  }
}

export default Notification;
