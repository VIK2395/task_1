const express = require('express');
const cors = require('cors');
// const sortController = require('./controllers/sortController');
// const searchController = require('./controllers/searchController');
const algorithmController = require('./controllers/algorithmController');

const app = express();

// CORS-enabled for all origins
app.use(cors());
app.use(express.json({ extended: true }));

app.use('/algorithm', algorithmController);

// app.use('/sort', sortController);
// app.use('/search', searchController);

app.listen(5000);
