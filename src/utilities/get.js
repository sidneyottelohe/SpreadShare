import superagent from 'superagent'

function get(endpoint) {
  superagent
    .get(endpoint)
    .set('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0OTU5MjI5NjZ9.83U8f4okUrroTrKKLECUtOdfAIBuSzXy753LNTU9jRU')
    .set('Accept', 'application/vnd.spreadshare.v1+json')
    .end(function(err, res) {
      return res.body
    });
}

export default get;
