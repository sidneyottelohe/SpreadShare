import { computed, observable, autorun } from "mobx";
import superagent from 'superagent'

import Sheet from './Sheet'
import Notification from './Notification'

class Store {
  @observable sheets = []
  @observable fetching = false
  @observable fetched = false

  constructor() {
    autorun(() => {
      console.log('lets try to hit the api')
      this.fetching = true
      if (window.location.origin === "http://localhost:3001") {
        var prefix = ''
      } else {
        var prefix = 'https://spreadshareapi.herokuapp.com/'
      }
      superagent
        .get(prefix + 'spreadsheets')
        .set('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0OTU5OTEyNjh9.RgMhD0q7F1iYIiznSk75pQpx-vIuC2DQ8cYW_9pbjIk')
        .set('Accept', 'application/vnd.spreadshare.v1+json')
        .then(data => {
          this.sheets = data.body
          this.fetching = false
          this.fetched = true
          // this.updateData(data);
          // this.stopLoading();
        })
        .catch(err => {
          // this.stopLoading(err);
        });
    });
  }

  @observable filter = ''
  @observable search = ''
  @observable sort = { property: 'upvotes', direction: 'desc' }
  @observable currentPath = { name: '' }

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
    return filteredSheets.filter(sheet => !this.search || sheetsSearch.test(sheet.title) || sheetsSearch.test(sheet.description))
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
