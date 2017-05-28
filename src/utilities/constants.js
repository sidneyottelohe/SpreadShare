function getApiPrefix() {
  return (window.location.origin === "http://localhost:3001") ? 'http://localhost:3000/' : 'https://spreadshareapi.herokuapp.com/'
}

var constants = {
  apiPrefix: getApiPrefix()
}

export default constants;
