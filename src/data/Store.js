import { computed, observable } from "mobx";

import Sheet from './Sheet'
import Notification from './Notification'

import transportLayer from './TransportLayer'

class Store {
  transportLayer
  @observable sheets = []
  @observable isLoading = true;

  constructor() {
    this.transportLayer = transportLayer
    this.loadSheets()
  }

  loadSheets() {
    this.isLoading = true;
    this.transportLayer.fetchSheets().then(spreadsheets => {
      spreadsheets.forEach(json => this.updateSheetFromServer(json));
      this.isLoading = false;
    })
  }

  updateSheetFromServer(json) {
    var sheet = this.sheets.find(sheet => sheet.id === json.id);
    if (!sheet) {
      sheet = new Sheet(this, json.id);
      this.sheets.push(sheet);
    }
    if (json.isDeleted) {
      this.removeSheet(sheet);
    } else {
      sheet.updateFromJson(json);
    }
  }

  updateSheet() {
    var id = 2
    var payload = {title: 'Fuck the world and then im gone'}
    this.transportLayer.updateSheet(id, payload).then(spreadsheet => {
      this.updateSheetFromServer(spreadsheet)
    })
  }

  upvoteSheet(id) {
    this.transportLayer.upvoteSheet(id).then(spreadsheet => {
      this.updateSheetFromServer(spreadsheet)
    })
  }

  createSheet() {
    var sheet = new Sheet(this);
    this.sheets.push(sheet);
    return sheet;
  }

  removeSheet(sheet) {
    this.sheets.splice(this.sheets.indexOf(sheet), 1);
    sheet.dispose();
  }

  // I wanna re do all of this

  // request.get('user', this.gotUserData.bind(this), console.log.bind(this))

  // getSheet(id) {
  //   request.get('spreadsheets/' + id, this.gotSheet.bind(this), console.log.bind(this))
  // }
  //
  // @observable sheet = {}
  //
  // @observable currentUser = {
  //   name: '',
  //   email: ''
  // }
  //
  // gotSheet(data) {
  //   this.sheet = data
  // }
  //
  // gotData(data) {
  //   this.sheets = data
  // }
  //
  // gotUserData(data) {
  //   this.currentUser = data
  // }
  //
  @observable filter = ''
  @observable search = ''
  @observable sort = { property: 'upvotes', direction: 'desc' }
  //
  // @observable submitSheetInputs = {
  //   id: '',
  //   name: '',
  //   description: '',
  //   link: '',
  //   tag: ''
  // }
  //
  // @observable signUpInputs = {
  //   name: '',
  //   email: '',
  //   password: '',
  //   password_confirmation: ''
  // }
  //
  // @observable signInInputs = {
  //   email: '',
  //   password: ''
  // }
  //
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

  sortSheets (prop, direction) {
    return function(a, b) {
      return direction === 'desc' ? b[prop] - a[prop] : a[prop] - b[prop]
    }
  }
  //
  // storeAuthToken(data) {
  //   localStorage.setItem('authToken', data.auth_token);
  // }
  //
  // showErrors(error, message) {
  //   console.log(message)
  // }
  //
  // signUp() {
  //   request.post('signup', this.signUpInputs, this.storeAuthToken, this.showErrors)
  // }
  //
  // signIn() {
  //   request.post('auth/login', this.signInInputs, this.storeAuthToken, this.showErrors)
  // }
  //
  // updateSheet(data) {
  //   console.log(data);
  // }
  //
  // upvoteSheet(spreadsheet_id) {
  //   request
  //     .post(
  //       'spreadsheets/' + spreadsheet_id + '/upvote',
  //       {},
  //       this.updateSheet.bind(this),
  //       this.showErrors.bind(this)
  //     )
  // }
  //
  // changeSheet(id) {
  //   console.log('sheet needs to change to' + id)
  //   this.getSheet(id)
  // }
}

var store = window.store = new Store();

export default store;
