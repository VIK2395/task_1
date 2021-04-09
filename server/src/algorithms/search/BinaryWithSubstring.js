const BaseSearchAlgorithm = require('./BaseSearchAlgorithm');
const regExpFromString = require('../../utils/regExpFromString');

// find matches in first string only, this is how binary works correctly
class BinarySearchWithSubstring extends BaseSearchAlgorithm {
  search(field, target) {
    let low = 0;
    let high = this.algorithmData.length - 1;
    const x = target.toString().toLowerCase().trim();

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      let value = this.algorithmData[mid][field].toString().toLowerCase().trim();

      if (value.search(regExpFromString(x)) !== -1) {
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

module.exports = BinarySearchWithSubstring;
