const Dataset = require('../../dataset');

class BaseSortAlgorithm {
  constructor() {
    this.algorithmData = Dataset.getData;
  }

  sort() {}
}

module.exports = BaseSortAlgorithm;
