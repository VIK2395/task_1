class Comics {
  constructor({
    comicsId = 'Not provided',
    title = 'Not provided',
    logo = 'Not provided',
    publisher = 'Not provided',
    author = 'Not provided',
    characters = [],
    rating = null,
  }) {
    this.comicsId = comicsId;
    this.title = title;
    this.logo = logo;
    this.publisher = publisher;
    this.author = author;
    this.characters = characters;
    this.rating = rating;
  }
}

module.exports = Comics;
