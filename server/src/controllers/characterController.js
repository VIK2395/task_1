const Character = require('../models/Character');
const characterCollection = require('../db/characterCollection');

const character_get = (req, res) => {
  res.json(characterCollection);
};

const character_post = (req, res) => {
  const { nickname, image, description, superpowers, role } = req.body;
  const character = new Character(nickname, image, description, superpowers, role);
  characterCollection.push(character);
  res.status(201).json(character);
};

// PUT - fully overwrite a model, PATCH - just modifies a field of a model
const character_put = (req, res) => {
  const { nickname, image, description, superpowers, role } = req.body;
  const index = characterCollection.findIndex((item) => item.characterId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Character with such an id not found' });
  }
  characterCollection[index] = new Character(nickname, image, description, superpowers, role);
  res.json(characterCollection[index]);
};

const character_delete = (req, res) => {
  const index = characterCollection.findIndex((item) => item.characterId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Character with such an id not found' });
  }
  characterCollection.splice(index, 1);
  res.json({ message: 'Character deleted' });
};

module.exports = {
  character_get,
  character_post,
  character_put,
  character_delete,
};
