const { v4: uuidv4 } = require('uuid');

class User {
  constructor(name, lastName, image) {
    this.userId = uuidv4();
    this.name = name;
    this.lastName = lastName;
    this.image = image;
  }
}

module.exports = User;
