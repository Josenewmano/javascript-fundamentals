const Github = require('./github');


describe('Github', () => {
  it('gets the repo data fetched by the Api class', () => {

    const mockedApi = {
      fetchRepositoryData: (route, callback) => {
        callback({
          name: 'sinatra/sinatra',
          description: 'Some fake description'
        });
      }
    }


    const github = new Github(mockedApi);

    github.fetch('sinatra/sinatra');
    
    expect(github.getRepoData()).toEqual({
      name: 'sinatra/sinatra',
      description: 'Some fake description'
    })
  });
});
