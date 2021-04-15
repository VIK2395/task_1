const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const comicsRoutes = require('./routes/comicsRouts');
const characterRoutes = require('./routes/characterRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');
const publisherRoutes = require('./routes/publisherRoutes');

const app = express();

// to enable CORS for all origins
app.use(cors());
app.use(express.json({ extended: true }));
// to allow brosers to request data from this folder
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));

app.use('/comics', comicsRoutes);
app.use('/character', characterRoutes);
app.use('/review', reviewRoutes);
app.use('/user', userRoutes);
app.use('/publisher', publisherRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// blobal error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message });
});

app.listen(5000);
