import request from '../utilities/request'

class ApiLayer {
  // user APIs
  authenticate(data) {
    return request.post('auth/login', data)
  }
  userInfo() {
    return request.get('user')
  }
  signUp(data) {
    return request.post('signup', data)
  }
  // sheets APIs
  fetchSheets() {
    return request.get('spreadsheets')
  }
  fetchSheet(id) {
    return request.get(`spreadsheets/${id}`)
  }
  updateSheet(id, data) {
    return request.post(`spreadsheets/${id}/update`, data)
  }
  upvoteSheet(id) {
    return request.post(`spreadsheets/${id}/upvote`)
  }
  createSheet(data) {
    console.log(data);
    return request.post('spreadsheets', data)
  }
  destroySheet(id) {
    return request.post(`spreadsheets/${id}/destroy`)
  }
}

var apiLayer = new ApiLayer();

export default apiLayer;
