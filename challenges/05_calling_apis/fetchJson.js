const got = require('got')

// 'https://jsonplaceholder.typicode.com/todos'


const fetchJson = (url) => {
  got(url)
  .then((response) =>
  console.log(JSON.parse(response.body)));
};

module.exports = fetchJson;
