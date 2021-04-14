const { v4: uuidv4 } = require('uuid');

class User {
  constructor({
    _id = uuidv4(),
    name = 'Not provided',
    lastName = 'Not povided',
    image = 'Not provided',
  }) {
    this._id = _id;
    this.name = name;
    this.lastName = lastName;
    this.image = image;
  }
}

module.exports = User;
