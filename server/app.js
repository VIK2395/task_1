const http = require('http');
const grid = require('./assets/grid');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(grid));
});

server.listen(3000, 'localhost');
