const { v4: uuidv4 } = require('uuid');

class Publisher {
  constructor(name, dateFounded, parantCompany, countryOfOrigin) {
    this.publisherId = uuidv4();
    this.name = name;
    this.dateFounded = dateFounded;
    this.parantCompany = parantCompany;
    this.countryOfOrigin = countryOfOrigin;
  }
}

module.exports = Publisher;
