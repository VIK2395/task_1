const express = require('express');
const cors = require('cors');
const algorithmController = require('./controllers/algorithmController');

const app = express();

// CORS-enabled for all origins
app.use(cors());
app.use(express.json({ extended: true }));

app.use('/algorithm', algorithmController);

app.listen(5000);
