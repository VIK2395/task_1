const BinarySearch = require('./search/Binary');
const LinearSearch = require('./search/Linear');
const LinearWithSubstringSearch = require('./search/LinearWithSubstring');
const BinaryWithSubstringSearch = require('./search/BinaryWithSubstring');

class Search {
  static create(name) {
    let algorithm;

    switch (name) {
      case 'binary':
        algorithm = new BinarySearch();
        break;
      case 'linear':
        algorithm = new LinearSearch();
        break;
      case 'linearwithsubstring':
        algorithm = new LinearWithSubstringSearch();
        break;
      case 'binarywithsubstring':
        algorithm = new BinaryWithSubstringSearch();
        break;
    }

    return algorithm;
  }
}

module.exports = Search;
