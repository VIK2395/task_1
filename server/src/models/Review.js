const { v4: uuidv4 } = require('uuid');

class Review {
  constructor({
    _id = uuidv4(),
    author = 'Not provided',
    comicsDescribed = 'Not provided',
    text = 'Not provided',
  }) {
    this._id = _id;
    this.author = author;
    this.comicsDescribed = comicsDescribed;
    this.text = text;
    this.dateAdded = new Date();
  }
}

module.exports = Review;
