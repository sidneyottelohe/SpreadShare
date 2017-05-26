import { observable } from "mobx";

import Comment from './Comment'

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
    this.created_at = new Date()
    this.comments = this.generateComments()
  }

  upvoteSheet() {
    this.upvotes += 1
  }

  generateComments() {
    return [
      new Comment({ body: 'Hello World', author: 'Pat Walls', created_at: '1 day ago' }),
      new Comment({ body: 'Foo Bar', author: 'Sidney Ottelohe', created_at: '2 days ago' })
    ]
  }
}

export default Sheet;
