const got = require("got")

const fetchRepositoryInfo = (url, callback) => {
  got(url)
  .then((receivedResponse) => callback(JSON.parse(receivedResponse.body)));
}

module.exports = fetchRepositoryInfo;