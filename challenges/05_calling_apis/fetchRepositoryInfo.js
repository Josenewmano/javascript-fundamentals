const got = require("got")

const fetchRepositoryInfo = (route, callback) => {
  let github = 'https://api.github.com/repos/';
  let url = github.concat(route)
  got(url)
  .then((receivedResponse) => callback(JSON.parse(receivedResponse.body)));
}

module.exports = fetchRepositoryInfo;