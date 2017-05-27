import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import onClickOutside from 'react-onclickoutside'

@observer
class MyAccount extends Component {
  openDropdown() {
    this.props.viewStore.myAccountOpen = !this.props.viewStore.myAccountOpen
  }
  handleClickOutside = evt => {
    this.props.viewStore.myAccountOpen = false
  }
  openClass() {
    return this.props.viewStore.myAccountOpen ? ' w--open' : ''
  }
  render() {
    return(
      <div
        className="account-dropdown w-dropdown"
        data-delay={0}
        onClick={this.openDropdown.bind(this)}
      >
        <div className={`account-dropdown__toggle w-dropdown-toggle${this.openClass()}`}>
          <div className="icon w-icon-dropdown-toggle" />
          <div>My Account</div>
          <a className="account-dropdown__avatar w-inline-block" href="#" />
        </div>
          <nav className={`account-dropdown__menu w-dropdown-list${this.openClass()}`}>
            <div className="account-dropdown__links-pointer" />
            <div className="account-dropdown__links-wrapper">
              <div className="account-dropdown__link">
                <Link to='/user/hello'>
                  <span className="account-dropdown__link__anchor w-dropdown-link">
                    My Profile
                  </span>
                </Link>
              </div>
              <div className="account-dropdown__link">
                <Link to='/submit'>
                  <span className="account-dropdown__link__anchor w-dropdown-link">
                    Submit spreadsheet
                  </span>
                </Link>
              </div>
              <div className="account-dropdown__link">
                <a className="account-dropdown__link__anchor w-dropdown-link">
                  sign out
                </a>
              </div>
            </div>
          </nav>
      </div>
    );
  }
}

export default onClickOutside(MyAccount)
