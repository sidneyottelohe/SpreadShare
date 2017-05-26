import { observable } from "mobx";

class Comment {
  @observable id
  @observable author
  @observable body
  @observable created_at

  constructor(params) {
    this.id = new Date()
    this.author = params.author
    this.body = params.body
    this.created_at = params.created_at
  }
}

export default Comment;
