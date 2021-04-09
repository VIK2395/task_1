const BaseSearchAlgorithm = require('./BaseSearchAlgorithm');

class LinearSearch extends BaseSearchAlgorithm {
  search(field, target) {
    const x = target.toString().toLowerCase().trim();

    const n = this.algorithmData.length;
    for (let i = 0; i < n; i++) {
      const value = this.algorithmData[i][field].toString().toLowerCase().trim();

      if (value === x) {
        return this.algorithmData[i];
      }
    }

    return 'Not found';
  }
}

module.exports = LinearSearch;
