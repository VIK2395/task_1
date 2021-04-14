const express = require('express');
const cors = require('cors');
const comicsRoutes = require('./routes/comicsRouts');
const characterRoutes = require('./routes/characterRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');
const publisherRoutes = require('./routes/publisherRoutes');

const app = express();

// Enable CORS for all origins
app.use(cors());
app.use(express.json({ extended: true }));

app.use('/comics', comicsRoutes);
app.use('/character', characterRoutes);
app.use('/review', reviewRoutes);
app.use('/user', userRoutes);
app.use('/publisher', publisherRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Such a route not found' });
});

app.listen(5000);
