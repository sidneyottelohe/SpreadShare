import { observable } from "mobx";

import Notification from './Notification'

class ViewStore {
  @observable notificationsOpen = false
  @observable myAccountOpen = false
  @observable sheet = 2

  @observable currentUser = {
    name: '',
    email: ''
  }

  @observable signInInputs = {
    email: '',
    password: ''
  }

  @observable submitSheetInputs = {
    title: '',
    description: '',
    url: ''
  }

  @observable signUpInputs = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  @observable filter = ''
  @observable search = ''
  @observable sort = { property: 'upvotes', direction: 'desc' }

  @observable notifications = [
    new Notification({body: 'This is a notification', link: 'http://google.com', created_at: '1 day ago'}),
    new Notification({body: 'This is another notification', link: 'http://google.com', created_at: '2 days ago'})
  ]

  filteredSheets(sheets) {
    // sort the sheets
    var sortedSheets = sheets.sort(this.sortSheets(this.sort.property, this.sort.direction))

    // filter the sheets
    var sheetsFilter = new RegExp(this.filter, 'i')
    var filteredSheets = sortedSheets.filter(sheet => !this.filter || sheetsFilter.test(sheet.tag))

    // search the sheets
    var sheetsSearch = new RegExp(this.search, 'i')
    return filteredSheets.filter(sheet => !this.search || sheetsSearch.test(sheet.title) || sheetsSearch.test(sheet.description))
  }

  sortSheets (prop, direction) {
    return function(a, b) {
      return direction === 'desc' ? b[prop] - a[prop] : a[prop] - b[prop]
    }
  }

  // user profile stuff

  @observable userSheetsFilter = 'upvoted'

  userSheets(sheets) {
    return sheets.filter(sheet => sheet[this.userSheetsFilter])
  }

  sheetCounts(sheets) {
    return {
      upvoted: sheets.filter(sheet => sheet.upvoted).length,
      created: sheets.filter(sheet => sheet.created).length,
      submitted: sheets.filter(sheet => sheet.submitted).length
    }
  }
}

var viewstore = window.viewstore = new ViewStore();

export default viewstore;
