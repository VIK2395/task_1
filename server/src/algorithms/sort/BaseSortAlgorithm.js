const Dataset = require('../../dataset');

class BaseSortAlgorithm {
  constructor() {
    this.algorithmData = Dataset.getData;
  }

  sort() {
    throw new Error('Sort method must be implemented.');
  }

  compare(a, b) {
    const A = typeof a === 'string' ? a.toLowerCase() : a;
    const B = typeof b === 'string' ? b.toLowerCase() : b;
    return A > B;
  }
}

module.exports = BaseSortAlgorithm;
