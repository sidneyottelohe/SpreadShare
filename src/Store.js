import { observable } from "mobx";

class Store {
  @observable sheets = ['Hello', 'World']
  @observable filter = ''
}

var store = new Store

export default store;
