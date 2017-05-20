import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom';

@observer
class FeedSideMenu extends Component {
  filter(f) {
    this.props.store.filter = f
  }
  sort(property) {
    var direction = this.props.store.sort.direction === 'asc' ? 'desc' : 'asc'
    this.props.store.sort = { property: property, direction: direction }
  }
  search(e) {
    this.props.store.search = e.target.value
  }
  isFilter(filter) {
    return this.props.store.filter === filter ? 'button is-checked' : 'button'
  }
  isSort(sort) {
    return this.props.store.sort.property === sort ? ' is-checked' : ''
  }
  render() {
    return (
      <aside className="feed__aside">
        <div className="filter-menu">
          <div className="filter-menu-header w-hidden-small w-hidden-tiny">
            <div>Search Feed</div>
          </div>
          <div className="filter-menu-wrap w-hidden-small w-hidden-tiny" id="search">
            <div className="w-embed">
              <input
                type="text"
                className="w-input quicksearch"
                id="quicksearch"
                placeholder="Search Spreadsheets..."
                onChange={this.search.bind(this)}
                value={this.props.store.search} />
            </div>
          </div>
          <div className="filter-menu-header">
            <div>sort feed</div>
          </div>
          <div className="filter-menu-wrap" id="sort">
            <div className="w-embed">
              <button className={`button recent${this.isSort('created_at')}`} onClick={this.sort.bind(this, 'created_at')}>Recently Added</button>
              <button className={`button popular${this.isSort('upvotes')}`} onClick={this.sort.bind(this, 'upvotes')}>Popular</button>
            </div>
          </div>
          <div className="filter-menu-header">
            <div>filter by category</div>
          </div>
          <div className="filter-menu-wrap" id="filters">
            <div className="w-embed">
              <button className={this.isFilter('')} onClick={this.filter.bind(this, '')}>All</button>
              <button className={this.isFilter('finance')} onClick={this.filter.bind(this, 'finance')}>Finance</button>
              <button className={this.isFilter('product')} onClick={this.filter.bind(this, 'product')}>Product</button>
              <button className={this.isFilter('people')} onClick={this.filter.bind(this, 'people')}>People</button>
              <button className={this.isFilter('growth')} onClick={this.filter.bind(this, 'growth')}>Growth</button>
              <button className={this.isFilter('inspiration')} onClick={this.filter.bind(this, 'inspiration')}>Inspiration</button>
              <button className={this.isFilter('tech')} onClick={this.filter.bind(this, 'tech')}>Tech</button>
              <button className={this.isFilter('business')} onClick={this.filter.bind(this, 'business')}>Business</button>
              <button className={this.isFilter('operations')} onClick={this.filter.bind(this, 'operations')}>Operations</button>
              <button className={this.isFilter('data')} onClick={this.filter.bind(this, 'data')}>Data</button>
            </div>
          </div>
        </div>
        <div className="digest-card w-hidden-small w-hidden-tiny">
          <div className="digest-card__title">Get updates in your inbox</div>
          <div className="digest-card__close" data-ix="close-digest-card">x</div>
          <Link to="/subscribe">
            <span className="btn-subscribe" href="subscribe.html">Subscribe</span>
          </Link>
        </div>
      </aside>
    );
  }
}

export default FeedSideMenu;
