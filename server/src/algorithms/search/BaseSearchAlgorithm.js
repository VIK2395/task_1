const Dataset = require('../../dataset');

class BaseSearchAlgorithm {
  constructor() {
    this.algorithmData = Dataset.getData;
  }

  search() {
    throw new Error('Search method must be implemented.');
  }

  compare(a, b) {
    const A = typeof a === 'string' ? a.toLowerCase() : a;
    const B = typeof b === 'string' ? b.toLowerCase() : b;
    return A < B;
  }
}

module.exports = BaseSearchAlgorithm;
