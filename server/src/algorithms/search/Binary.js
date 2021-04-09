const BaseSearchAlgorithm = require('./BaseSearchAlgorithm');

class BinarySearch extends BaseSearchAlgorithm {
  search(field, target) {
    let low = 0;
    let high = this.algorithmData.length - 1;
    const x = target.toString().toLowerCase().trim();

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      let value = this.algorithmData[mid][field].toString().toLowerCase().trim();

      if (value === x) {
        return this.algorithmData[mid];
      }

      if (this.compare(value, x)) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return 'Not found';
  }
}

module.exports = BinarySearch;