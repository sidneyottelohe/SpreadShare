import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class FeedSideMenu extends Component {
  filter(f) {
    this.props.viewStore.filter = f
  }
  sort(property) {
    var direction = this.props.viewStore.sort.direction === 'asc' ? 'desc' : 'asc'
    this.props.viewStore.sort = { property: property, direction: direction }
  }
  isFilter(filter) {
    return this.props.viewStore.filter === filter ? 'feed__filter__toggle--active ' : ''
  }
  isSort(sort) {
    return this.props.viewStore.sort.property === sort ? 'feed__filter__toggle--active ' : ''
  }
  render() {
    return (
      <div className="side-bar">
        <div className="filter__group">
          <div className="filter__group__text">Sort Feed</div>
          <div className={`${this.isSort('upvotes')}filter__toggle`} onClick={this.sort.bind(this, 'upvotes')}>Popular</div>
          <div className={`${this.isSort('created_at')}filter__toggle`} onClick={this.sort.bind(this, 'created_at')}>Recent</div>
        </div>
        <div className="filter__group">
          <div className="filter__group__text">Filter by Category</div>
          <div className={`${this.isFilter('')}filter__toggle`} onClick={this.filter.bind(this, '')}>All</div>
          <div className={`${this.isFilter('people')}filter__toggle`} onClick={this.filter.bind(this, 'people')}>People</div>
          <div className={`${this.isFilter('finance')}filter__toggle`} onClick={this.filter.bind(this, 'finance')}>Finance</div>
          <div className={`${this.isFilter('growth')}filter__toggle`} onClick={this.filter.bind(this, 'growth')}>Growth</div>
          <div className={`${this.isFilter('fitness')}filter__toggle`} onClick={this.filter.bind(this, 'fitness')}>Fitness</div>
        </div>
      </div>
    );
  }
}

export default FeedSideMenu;
