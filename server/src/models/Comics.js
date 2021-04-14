const { v4: uuidv4 } = require('uuid');

class Comics {
  constructor(
    title = 'Not provided',
    logo = 'Not provided',
    publisher = 'Not provided',
    author = 'Not provided',
    characters = [],
    rating = null
  ) {
    this.comicsId = uuidv4();
    this.title = title;
    this.logo = logo;
    this.publisher = publisher;
    this.author = author;
    this.characters = characters;
    this.rating = rating;
    // this.marks = []
  }
  // updateRating()
}

module.exports = Comics;
