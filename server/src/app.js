const express = require('express');
const cors = require('cors');
const sortController = require('./controllers/sortController');
const searchController = require('./controllers/searchController');

const app = express();

// This is CORS-enabled for all origins
app.use(cors());
app.use(express.json({ extended: true }));

app.use('/sort', sortController);
app.use('/search', searchController);

app.listen(5000);

// const server = http.createServer((req, res) => {

// While in development, to allow client to make requests to server // CORS
// Delete this before deploing
// res.setHeader('Access-Control-Allow-Origin', '*');
// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// res.setHeader('Access-Control-Allow-Credentials', true);

// res.setHeader('Content-Type', 'application/json');
// res.end(JSON.stringify(data));
// });

// server.listen(5000);
