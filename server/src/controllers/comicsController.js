const { v4: uuidv4 } = require('uuid');
const Comics = require('../models/Comics');
const database = require('../database/Database').getData;
const comicses = require('../database/Database').getData.comicses;

const comics_get_all = (req, res) => {
  if (req.query.enrich === 'true') {
    const enrichedComicses = comicses.map((item) => item.enrich(database));
    return res.json(enrichedComicses);
  }
  // throw new Error('Global error handler test');
  res.json(comicses);
};

const comics_get_one = (req, res) => {
  const index = comicses.findIndex((item) => item.comicsId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Comics with such an id not found' });
  }
  res.json(comicses[index]);
};

const comics_post = (req, res) => {
  const comics = new Comics({
    comicsId: uuidv4(),
    title: req.body.title,
    logo: `http://localhost:5000/${req.file.path}`,
    publisher: req.body.publisher,
    author: req.body.author,
    characters: req.body.characters,
    rating: req.body.rating,
  });
  comicses.push(comics);
  res.status(201).json(comics);
};

const comics_put = (req, res) => {
  const index = comicses.findIndex((item) => item.comicsId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Comics with such an id not found' });
  }
  comicses[index] = new Comics({
    comicsId: req.params.id,
    title: req.body.title,
    logo: `http://localhost:5000/${req.file.path}`,
    publisher: req.body.publisher,
    author: req.body.author,
    characters: req.body.characters,
    rating: req.body.rating,
  });
  res.json(comicses[index]);
};

const comics_delete = (req, res) => {
  const index = comicses.findIndex((item) => item.comicsId === req.params.id);
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
