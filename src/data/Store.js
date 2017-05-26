import { computed, observable } from "mobx";

import Sheet from './Sheet'
import Notification from './Notification'

class Store {
  @observable sheets = [
    new Sheet({id: '1', name: 'Cool Finance sheet', description: 'This is a description.', link: 'http://google.com', tag: 'finance'}),
    new Sheet({id: '2', name: 'Fun Product Spreadsheet', description: 'This is another description.', link: 'http://google.com', tag: 'product'}),
    new Sheet({id: '3', name: 'Cool People', description: 'A fun description', link: 'http://google.com', tag: 'people'}),
    new Sheet({id: '4', name: 'All about growth.', description: 'A fun description.', link: 'http://google.com', tag: 'growth'})
  ]
  @observable filter = ''
  @observable search = ''
  @observable sort = { property: 'upvotes', direction: 'desc' }
  @observable currentPath = {name: ''}

  @observable submitSheetInputs = {
    id: '',
    name: '',
    description: '',
    link: '',
    tag: ''
  }

  @observable notifications = [
    new Notification({body: 'This is a notification', link: 'http://google.com', created_at: '1 day ago'}),
    new Notification({body: 'This is another notification', link: 'http://google.com', created_at: '2 days ago'})
  ]

  @computed get filteredSheets() {
    var sheets = this.sheets

    // sort the sheets
    var sortedSheets = sheets.sort(this.sortSheets(this.sort.property, this.sort.direction))

    // filter the sheets
    var sheetsFilter = new RegExp(this.filter, 'i')
    var filteredSheets = sortedSheets.filter(sheet => !this.filter || sheetsFilter.test(sheet.tag))

    // search the sheets
    var sheetsSearch = new RegExp(this.search, 'i')
    return filteredSheets.filter(sheet => !this.search || sheetsSearch.test(sheet.name) || sheetsSearch.test(sheet.description))
  }

  @computed get currentSheet() {
    return this.sheets[0]
  }

  sortSheets (prop, direction) {
    return function(a, b) {
      return direction === 'desc' ? b[prop] - a[prop] : a[prop] - b[prop]
    }
  }

  createSheet(params) {
    var sheet = new Sheet(params)
    this.sheets.push(sheet)
    return sheet
  }
}

var store = window.store = new Store();

export default store;
