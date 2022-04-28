class Github {

  constructor(api) {
    this.api = api;
  };

  fetch(route) {
    this.api.fetchRepositoryData(route, (response) => { this.data = response });
  };

  getRepoData() {
    return this.data;
  };

};

module.exports = Github;