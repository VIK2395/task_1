const Character = require('../models/mongoose/Character');

const character_get_all = async (req, res) => {
  try {
    const characters = await Character.find({});
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const character_get_one = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id); // null

    if (!character) {
      return res.status(404).json({ message: 'Character with such an id not found' });
    }
    res.json({ character });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const character_post = async (req, res) => {
  try {
    const character = new Character({
      nickname: req.body.nickname,
      image: `http://localhost:5000/${req.file.path}`,
      description: req.body.description,
      superpowers: req.body.superpowers,
      role: req.body.role,
    });

    await character.save();

    res.status(201).json({ character });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const character_put = async (req, res) => {
  try {
    const character = await Character.findByIdAndUpdate(
      req.params.id,
      {
        nickname: req.body.nickname,
        image: `http://localhost:5000/${req.file.path}`,
        description: req.body.description,
        superpowers: req.body.superpowers,
        role: req.body.role,
      },
      { new: true }
    );

    if (!character) {
      return res.status(404).json({ message: 'Character with such an id not found' });
    }

    res.json({ character });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const character_delete = async (req, res) => {
  try {
    const character = await Character.findByIdAndDelete(req.params.id);

    if (!character) {
      return res.status(404).json({ message: 'Character with such an id not found' });
    }
    res.json({ message: 'Character deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
