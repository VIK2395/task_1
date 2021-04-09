const BaseSortAlgorithm = require('./BaseSortAlgorithm');

class QuickSort extends BaseSortAlgorithm {
  compare(a, b) {
    const A = typeof a === 'string' ? a.toLowerCase() : a;
    const B = typeof b === 'string' ? b.toLowerCase() : b;
    return A >= B;
  }

  partition(field, order, array, low, high) {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (
        (order === 'asc' && this.compare(pivot[field], array[j][field])) ||
        (order === 'desc' && !this.compare(pivot[field], array[j][field]))
      ) {
        i++;
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }

    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    return i + 1;
  }

  sort(field, order, array = this.algorithmData, low = 0, high = this.algorithmData.length - 1) {
    if (low < high) {
      let pi = this.partition(field, order, array, low, high);
      this.sort(field, order, array, low, pi - 1);
      this.sort(field, order, array, pi + 1, high);
    }

    return this.algorithmData;
  }
}

module.exports = QuickSort;
