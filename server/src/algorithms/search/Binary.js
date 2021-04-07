const BaseSortAlgorithm = require('../sort/BaseSortAlgorithm');

class BinarySearch extends BaseSortAlgorithm {
  search(target) {
    let low = 0;
    let high = this.algorithmData.length - 1;
    const lowerCaseTarget = target.toString().toLowerCase();
    while (low <= high) {
      const mid = Math.floor(low + high);
      const element = this.algorithmData[mid].Airport.Code.toString().toLowerCase();
      if (element < lowerCaseTarget) {
        low = mid + 1;
      } else if (element > lowerCaseTarget) {
        high = mid - 1;
      } else {
        return this.algorithmData[mid];
      }
    }
    return 'Not found';
  }
}

module.exports = BinarySearch;
