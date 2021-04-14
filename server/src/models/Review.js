const { v4: uuidv4 } = require('uuid');

class Review {
  constructor(author = 'Not provided', comicsDescribed = 'Not provided', text = 'Not provided') {
    this.rewiewId = uuidv4();
    this.author = author;
    this.comicsDescribed = comicsDescribed;
    this.text = text;
    this.dateAdded = new Date();
    // this.rating = rating
  }
}

module.exports = Review;
