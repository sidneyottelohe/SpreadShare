import request from '../utilities/request'

class TransportLayer {
  fetchSheets() {
    return request.get('spreadsheets')
  }
  updateSheet(id, data) {
    return request.post(`spreadsheets/${id}/update`, data)
  }
  upvoteSheet(id) {
    return request.post(`spreadsheets/${id}/upvote`)
  }
}

var transportLayer = new TransportLayer();

export default transportLayer;
