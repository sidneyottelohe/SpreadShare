import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

@observer
class Header extends Component {
  search(e) {
    this.props.store.search = e.target.value
  }
  render() {
    return (
      <nav className="navbar">
        <div className="container container--navbar">
          <div className="div-block">
            <a className="brand w-inline-block">
              <div className="brand__logo">SpreadShare<span className="navbar__brand__logo-span">Beta</span>
              </div>
            </a>
          </div>
          <input
            className="search"
            placeholder='Search Spreadsheets...'
            id="search"
            onChange={this.search.bind(this)}
            value={this.props.store.search}
          />
          <div className="navbar__user-menu">
            <div className="activity-dropdown w-dropdown" data-delay={0}>
              <div className="account-dropdown__toggle account-dropdown__toggle--activity w-dropdown-toggle">
                <div className="account-activity">
                  <div className="account-activity__count">1</div>
                </div>
              </div>
              {
                // <nav className="activity-dropdown__menu w-dropdown-list">
                //   <div className="account-dropdown__links-pointer" />
                //   <div className="account-activity-wrapper">
                //     <div className="account-activity__item">
                //       <div className="account-activity__item__inner"><a href="#" className="account-activity__item__inner--link">John Doe</a> Upvoted <a className="account-activity__item__inner--link">Spreadsheet X</a>
                //       </div>
                //       <div className="account-activity__item__meta">1 Day ago</div>
                //     </div>
                //     <div className="account-activity__item">
                //       <div className="account-activity__item__inner"><a href="#" className="account-activity__item__inner--link">Jane Done</a>&nbsp;Started following you</div>
                //       <div className="account-activity__item__meta">1 Day ago</div>
                //     </div>
                //     <div className="account-activity__item">
                //       <div className="account-activity__item__inner"><a href="#" className="account-activity__item__inner--link">Sidney Ottelohe</a>&nbsp;Started following you</div>
                //       <div className="account-activity__item__meta">2 Days ago</div>
                //     </div>
                //     <div className="account-activity__view-all">View All Activity</div>
                //   </div>
                // </nav>
              }

            </div>
            <div className="account-dropdown w-dropdown" data-delay={0}>
              <div className="account-dropdown__toggle w-dropdown-toggle">
                <div className="icon w-icon-dropdown-toggle" />
                <div>My Account</div>
                <a className="account-dropdown__avatar w-inline-block" href="#" />
              </div>
              {
                // <nav className="account-dropdown__menu w-dropdown-list">
                //   <div className="account-dropdown__links-pointer" />
                //   <div className="account-dropdown__links-wrapper">
                //     <div className="account-dropdown__link"><a className="account-dropdown__link__anchor w-dropdown-link" href="#">My Profile</a>
                //     </div>
                //     <div className="account-dropdown__link"><a className="account-dropdown__link__anchor w-dropdown-link" href="#">Submit spreadsheet</a>
                //     </div>
                //     <div className="account-dropdown__link"><a className="account-dropdown__link__anchor w-dropdown-link" href="#">sign out</a>
                //     </div>
                //   </div>
                // </nav>
              }

            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
