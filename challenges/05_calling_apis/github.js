const GithubApi = require('./githubApi');

class Github {

  constructor(api) {
    this.api = api;
  }

  fetch(url) {
    this.api.getRepositoryData(url, (reponse) => { console.log(response.body)});
  }

}

module.exports = {
  Github,
  GithubApi,
};