import { computed, observable } from "mobx";

class ViewStore {
  @observable notificationsOpen = false
  @observable myAccountOpen = false
}

var viewstore = window.viewstore = new ViewStore();

export default viewstore;
