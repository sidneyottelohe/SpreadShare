import { observable } from "mobx";

class Notification {
  @observable id
  @observable body
  @observable link
  @observable time_ago

  constructor(params) {
    this.id = new Date()
    this.body = params.body
    this.link = params.link
    this.created_at = params.created_at
  }
}

export default Notification;
