const BaseSortAlgorithm = require('./BaseSortAlgorithm');

class BubbleSort extends BaseSortAlgorithm {
  sort(field, order) {
    const n = this.algorithmData.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (
          (order === 'asc' &&
            this.compare(this.algorithmData[min][field], this.algorithmData[j][field])) ||
          (order === 'desc' &&
            !this.compare(this.algorithmData[min][field], this.algorithmData[j][field]))
        ) {
          const temp = this.algorithmData[j];
          this.algorithmData[j] = this.algorithmData[j + 1];
          this.algorithmData[j + 1] = temp;
        }
      }
    }

    return this.algorithmData;
  }
}

module.exports = BubbleSort;
