const express = require('express');
const app = express();
const port = 3000;
app.locals.counter = 0;

app.get('/', (req, res) => {
  res.send('Hello!')
});

app.post('/counter', (req, res) => {
  req.app.locals.counter += 1;
});

app.get('/counter', (req, res) => {
  res.send(`${app.locals.counter}`);
})

app.delete('/counter', (req, res) => {
  req.app.locals.counter = 0;
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);