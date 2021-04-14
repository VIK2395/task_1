const Comics = require('../models/Comics');
const comicsCollection = require('../db/comicsCollection');

const comics_get = (req, res) => {
  res.json(comicsCollection);
};

const comics_post = (req, res) => {
  const { title, logo, publisher, author, characters, rating } = req.body;
  const comics = new Comics(title, logo, publisher, author, characters, rating);
  comicsCollection.push(comics);
  res.status(201).json(comics);
};

// PUT - fully overwrite a model, PATCH - just modifies a field of a model
const comics_put = (req, res) => {
  const { title, logo, publisher, author, characters, rating } = req.body;
  const index = comicsCollection.findIndex((item) => item.comicsId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Comics with such an id not found' });
  }
  comicsCollection[index] = new Comics(title, logo, publisher, author, characters, rating);
  res.json(comicsCollection[index]);
};

const comics_delete = (req, res) => {
  const index = comicsCollection.findIndex((item) => item.comicsId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Comics with such an id not found' });
  }
  comicsCollection.splice(index, 1);
  res.json({ message: 'Comics deleted' });
};

module.exports = {
  comics_get,
  comics_post,
  comics_put,
  comics_delete,
};
