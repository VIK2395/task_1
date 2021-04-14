const { v4: uuidv4 } = require('uuid');

class Character {
  constructor({
    _id = uuidv4(),
    nickname = 'Not provided',
    image = 'Not provided',
    description = 'Not provided',
    superpowers = [],
    role = 'Not provided',
  }) {
    this._id = _id;
    this.nickname = nickname;
    this.image = image;
    this.description = description;
    this.superpowers = superpowers;
    this.role = role;
  }
}

module.exports = Character;
