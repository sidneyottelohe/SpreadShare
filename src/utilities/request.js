import superagent from 'superagent'
import constants from './constants'

var Request = {
  get: function(resource) {
    console.log('get', resource);
    return superagent
            .get(this.endpoint(resource))
            .set('Authorization', this.authToken())
            .set('Accept', this.apiVersion1())
            .then(data => { return data.body })
  },
  post: function(resource, data) {
    console.log('post', resource, data);
    return superagent
            .post(this.endpoint(resource))
            .send(data)
            .set('Authorization', this.authToken())
            .set('Accept', this.apiVersion1())
            .then(data => { return data.body })
  },
  endpoint: function(resource) {
    return constants.apiPrefix + resource
  },
  authToken: function() {
    return localStorage.authToken
  },
  apiVersion1: function() {
    return 'application/vnd.spreadshare.v1+json'
  }
}


export default Request;
