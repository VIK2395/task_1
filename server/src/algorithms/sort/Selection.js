const BaseSortAlgorithm = require('./BaseSortAlgorithm');

class SelectionSort extends BaseSortAlgorithm {
  sort(field, order) {
    let min;
    let temp;

    const n = this.algorithmData.length;

    for (let i = 0; i < n - 1; i++) {
      min = i;
      for (let j = i + 1; j < n; j++) {
        if (
          (order === 'asc' &&
            this.compare(this.algorithmData[min][field], this.algorithmData[j][field])) ||
          (order === 'desc' &&
            !this.compare(this.algorithmData[min][field], this.algorithmData[j][field]))
        ) {
          min = j;
        }
      }

      temp = this.algorithmData[i];
      this.algorithmData[i] = this.algorithmData[min];
      this.algorithmData[min] = temp;
    }

    return this.algorithmData;
  }
}

module.exports = SelectionSort;
