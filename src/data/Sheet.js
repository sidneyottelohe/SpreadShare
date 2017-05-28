import { observable, computed, reaction } from "mobx";
import uuid from 'node-uuid';

class Sheet {
  id = null

  @observable comments = [];
  @observable description = "";
  @observable title = "";
  @observable upvotes = [];
  @observable upvotes_count = "";
  @observable url = "";

  store = null

  /**
   * Indicates whether changes in this object
   * should be submitted to the server
   */
  autoSave = true;

  /**
   * Disposer for the side effect that automatically
   * stores this Todo, see @dispose.
   */
  saveHandler = null;

  constructor(store, id = uuid.v4()) {
    this.store = store;
    this.id = id;

    this.saveHandler = reaction(
      // observe everything that is used in the JSON:
      () => this.asJson,
      // if autoSave is on, send json to server
      (json) => {
        if (this.autoSave) {
          console.log('try to save the sheet using a transport layer')
          // this.store.transportLayer.saveSheet(json);
        }
      }
    );
  }

  delete() {
    console.log('try to remove the sheet using the transport layer')
    // this.store.transportLayer.deleteTodo(this.id);
    this.store.removeSheet(this);
  }

  @computed get asJson() {
    return {
      id: this.id,
      title: this.title,
      // task: this.task,
      // authorId: this.author ? this.author.id : null
    };
  }

  updateFromJson(json) {
    // make sure our changes aren't send back to the server
    this.autoSave = false;
    this.comments = json.comments
    this.description = json.description
    this.title = json.title
    this.upvotes = json.upvotes
    this.upvotes_count = json.upvotes_count
    this.url = json.url
  }

  dispose() {
    // clean up the observer
    this.saveHandler();
  }

}

export default Sheet;
