const got = require("got");

class GithubApi {
  getRepositoryData(url, callback) {
    got(url).then((response) => callback(JSON.parse(response.body)));
  }
}

module.exports = GithubApi;