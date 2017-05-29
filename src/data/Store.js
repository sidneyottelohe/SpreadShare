import { computed, observable } from "mobx";

import Sheet from './Sheet'

import apiLayer from './ApiLayer'
import viewStore from './ViewStore'

class Store {
  apiLayer
  viewStore
  @observable sheets = []
  @observable isLoading = true;

  // things to initialize

  constructor() {
    this.apiLayer = apiLayer
    this.viewStore = viewStore
    this.loadUser()
    this.loadSheets()
  }

  loadUser() {
    this.apiLayer.userInfo()
      .then(userInfo => { this.viewStore.currentUser = userInfo })
  }

  loadSheets() {
    this.isLoading = true;
    this.apiLayer.fetchSheets()
      .then(spreadsheets => {
        spreadsheets.forEach(json => this.updateSheetFromServer(json));
        this.isLoading = false;
      })
  }

  // user actions

  signIn() {
    this.apiLayer.authenticate(this.viewStore.signInInputs)
      .then(data => { localStorage.setItem('authToken', data.auth_token); })
      .catch(data => { this.showErrors(data.response.status, data.response.text) })
  }

  // spreadsheet actions

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
    // TODO need to make real
    var id = 2
    var payload = {title: 'Fuck the world and then im gone'}
    this.apiLayer.updateSheet(id, payload).then(spreadsheet => {
      this.updateSheetFromServer(spreadsheet)
    })
  }

  createSheet() {
    var sheet = new Sheet(this);
    sheet.create()
    this.sheets.push(sheet);
    return sheet;
  }

  getSheet(id) {
    this.apiLayer.fetchSheet(id).then(spreadsheet => {
      this.updateSheetFromServer(spreadsheet)
    })
  }

  removeSheet(sheet) {
    this.sheets.splice(this.sheets.indexOf(sheet), 1);
    sheet.delete();
  }

  // other / where to put this?

  @computed get filteredSheets() {
    console.log('this works old thing');
    return this.viewStore.filteredSheets(this.sheets)
  }

  @computed get userSheets() {
    console.log('why doesnt this work');
    return this.viewStore.userSheets(this.sheets)
  }

  @computed get sheet() {
    console.log('recomputing');
    return this.sheets.find(sheet => sheet.id === this.viewStore.sheet) || {}
  }

  @computed get sheetCounts() {
    return this.viewStore.sheetCounts(this.sheets)
  }

  showErrors(error, message) {
    console.log(error, message)
  }
}

var store = window.store = new Store();

export default store;
