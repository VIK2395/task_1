const BaseSearchAlgorithm = require('./BaseSearchAlgorithm');
const regExpFromString = require('../../utils/regExpFromString');

class LinearWithSubstringSearch extends BaseSearchAlgorithm {
  search(field, target) {
    const x = target.toString().toLowerCase().trim();
    const result = [];

    const n = this.algorithmData.length;
    for (let i = 0; i < n; i++) {
      const value = this.algorithmData[i][field].toString().toLowerCase().trim();

      if (value.search(regExpFromString(x)) !== -1) {
        result.push(this.algorithmData[i]);
      }
    }

    if (result.length === 0) {
      return 'Not found';
    }

    return result;
  }
}

module.exports = LinearWithSubstringSearch;
