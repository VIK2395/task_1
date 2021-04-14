const { v4: uuidv4 } = require('uuid');

class Publisher {
  constructor({
    _id = uuidv4(),
    name = 'Not provided',
    dateFounded = 'Not provided',
    parantCompany = 'Not provided',
    countryOfOrigin = 'Not provided',
  }) {
    this._id = _id;
    this.name = name;
    this.dateFounded = dateFounded;
    this.parantCompany = parantCompany;
    this.countryOfOrigin = countryOfOrigin;
  }
}

module.exports = Publisher;
