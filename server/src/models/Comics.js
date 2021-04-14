const { v4: uuidv4 } = require('uuid');

class Comics {
  constructor({
    _id = uuidv4(),
    title = 'Not provided',
    logo = 'Not provided',
    publisher = 'Not provided',
    author = 'Not provided',
    characters = [],
    rating = null,
  }) {
    this._id = _id;
    this.title = title;
    this.logo = logo;
    this.publisher = publisher;
    this.author = author;
    this.characters = characters;
    this.rating = rating;
  }
}

module.exports = Comics;
