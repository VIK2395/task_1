const { v4: uuidv4 } = require('uuid');

class Character {
  constructor(
    nickname = 'Not provided',
    image = 'Not provided',
    description = 'Not provided',
    superpowers = [],
    role = 'Not provided'
  ) {
    this.characterId = uuidv4();
    this.nickname = nickname;
    this.image = image;
    this.description = description;
    this.superpowers = superpowers;
    this.role = role;
  }
}

module.exports = Character;
