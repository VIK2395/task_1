const { v4: uuidv4 } = require('uuid');
const Character = require('../models/Character');
const characters = require('../database/Database').getData.characters;

const character_get_all = (req, res) => {
  res.json(characters);
};

const character_get_one = (req, res) => {
  const index = characters.findIndex((item) => item.characterId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Character with such an id not found' });
  }
  res.json(characters[index]);
};

const character_post = (req, res) => {
  const character = new Character({
    characterId: uuidv4(),
    nickname: req.body.nickname,
    image: `http://localhost:5000/${req.file.path}`,
    description: req.body.description,
    superpowers: req.body.superpowers,
    role: req.body.role,
  });
  characters.push(character);
  res.status(201).json(character);
};

const character_put = (req, res) => {
  const index = characters.findIndex((item) => item.characterId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Character with such an id not found' });
  }
  characters[index] = new Character({
    characterId: req.params.id,
    nickname: req.body.nickname,
    image: `http://localhost:5000/${req.file.path}`,
    description: req.body.description,
    superpowers: req.body.superpowers,
    role: req.body.role,
  });
  res.json(characters[index]);
};

const character_delete = (req, res) => {
  const index = characters.findIndex((item) => item.characterId === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Character with such an id not found' });
  }
  characters.splice(index, 1);
  res.json({ message: 'Character deleted' });
};

module.exports = {
  character_get_all,
  character_get_one,
  character_post,
  character_put,
  character_delete,
};

// const character = characters.find((c) => c.id === parseInt(req.params.id))
// if (!character) res.status(404).json({ message: 'Character with such an id not found' });
// const index = characters.indexOf(character)
// characters.splice(index, 1);
// character = new Character(req.body);
// character.id = 'character_05'
// res.json(character);

// if (!req.body.characterId) {
//   return res.status(400).json({ message: 'characterId is not provided' });
// }
// if (req.params.id !== req.body.characterId) {
//   return res.status(400).json({ message: "characterId doesn't match" });
// }

// PUT - fully overwrite a model, PATCH - just modifies a field of a model

// console.log(req.file);
// console.log(req.body);
