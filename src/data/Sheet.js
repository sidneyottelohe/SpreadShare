import { observable } from "mobx";
import uuid from 'node-uuid';

class Sheet {
  id = null
  upvoted = null
  submitted = null
  created = null
  category = null
  format = null
  user = null
  creators = []
  contributors = []
  related_spreadsheets = []

  @observable comments = [];
  @observable tag_names = [];
  @observable description = "";
  @observable title = "";
  @observable upvotes = [];
  @observable upvotes_count = "";
  @observable url = "";

  store = null

  constructor(store, id = uuid.v4()) {
    this.store = store;
    this.id = id
  }

  create() {
    this.store.apiLayer.createSheet(this.store.viewStore.submitSheetInputs)
      .then(json => this.store.updateSheetFromServer(json))
      .catch(error => this.store.viewStore.updateErrorMessage(error))
  }

  upvote() {
    this.store.apiLayer.upvoteSheet(this.id)
      .then(spreadsheet => this.store.updateSheetFromServer(spreadsheet))
  }

  upvoteSheet(id) {
    this.apiLayer.upvoteSheet(id)
      .then(spreadsheet => this.updateSheetFromServer(spreadsheet))
  }

  delete() {
    this.store.apiLayer.destroySheet(this.id)
      .then(data => console.log(data, 'has been deleted') )
  }

  updateFromJson(json) {
    // make sure our changes aren't send back to the server
    this.autoSave = false;
    this.comments = json.comments
    this.tag_names = json.tag_names
    this.description = json.description
    this.title = json.title
    this.upvotes = json.upvotes
    this.upvotes_count = json.upvotes_count
    this.url = json.url
    this.upvoted = json.upvoted
    this.submitted = json.submitted
    this.created = json.created
    this.category = json.category
    this.format = json.format
    this.user = json.user
    this.contributors = json.contributors
    this.creators = json.creators
    this.related_spreadsheets = json.related_spreadsheets
  }

}

export default Sheet;
