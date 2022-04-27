const got = require('got')

// 'https://jsonplaceholder.typicode.com/todos'


const fetchJson = (url, callback) => {
  got(url)
  .then((response) => callback(JSON.parse(response.body)));
};

module.exports = fetchJson;
