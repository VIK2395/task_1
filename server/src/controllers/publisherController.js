const Publisher = require('../models/Publisher');
const publishers = require('../database/Database').getData.publishers;

const publisher_get_all = (req, res) => {
  res.json(publishers);
};

const publisher_get_one = (req, res) => {
  const index = publishers.findIndex((publisher) => publisher._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Publisher with such an id not found' });
  }
  res.json(publishers[index]);
};

const publisher_post = (req, res) => {
  const publisher = new Publisher(req.body);
  publishers.push(publisher);
  res.status(201).json(publisher);
};

// PUT - fully overwrite a model, PATCH - just modifies a field of a model
const publisher_put = (req, res) => {
  const index = publishers.findIndex((publisher) => publisher._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Publisher with such an id not found' });
  }
  publishers[index] = new Publisher(req.body);
  res.json(publishers[index]);
};

const publisher_delete = (req, res) => {
  const index = publishers.findIndex((publisher) => publisher._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Publisher with such an id not found' });
  }
  publishers.splice(index, 1);
  res.json({ message: 'Publisher deleted' });
};

module.exports = {
  publisher_get_all,
  publisher_get_one,
  publisher_post,
  publisher_put,
  publisher_delete,
};
