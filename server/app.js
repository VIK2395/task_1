const http = require('http');
const data = require('./assets/data');

const server = http.createServer((req, res) => {
  // While in development, to allow client to make requests to server // CORS
  // Delete this before deploing
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
});

server.listen(5000);
