import { observable } from "mobx";

class Sheet {
  @observable name
  @observable id
  @observable description
  @observable link
  @observable tag
  @observable upvotes
  @observable comments
  @observable created_at

  constructor(params) {
    this.name = params.name
    this.id = params.id
    this.description = params.description
    this.link = params.link
    this.tag = params.tag
    this.upvotes = 0
    this.comments = 0
    this.created_at = new Date()
  }

}

export default Sheet;
