const Dataset = require('../dataset');

class BaseSearchAlgorithm {
  constructor() {
    this.algorithmData = Dataset.getData;
  }

  search() {}
}

module.exports = BaseSearchAlgorithm;
