const Comics = require('../models/Comics');
const comicses = require('../db/Database').getData.comicses;

const comics_get_all = (req, res) => {
  res.json(comicses);
};

const comics_get_one = (req, res) => {
  const index = comicses.findIndex((comics) => comics._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Comics with such an id not found' });
  }
  res.json(comicses[index]);
};

const comics_post = (req, res) => {
  const comics = new Comics(req.body);
  comicses.push(comics);
  res.status(201).json(comics);
};

// PUT - fully overwrite a model, PATCH - just modifies a field of a model
const comics_put = (req, res) => {
  const index = comicses.findIndex((comics) => comics._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Comics with such an id not found' });
  }
  comicses[index] = new Comics(req.body);
  res.json(comicses[index]);
};

const comics_delete = (req, res) => {
  const index = comicses.findIndex((comics) => comics._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Comics with such an id not found' });
  }
  comicses.splice(index, 1);
  res.json({ message: 'Comics deleted' });
};

module.exports = {
  comics_get_all,
  comics_get_one,
  comics_post,
  comics_put,
  comics_delete,
};
