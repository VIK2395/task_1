const BaseSortAlgorithm = require('./BaseSortAlgorithm');

class SelectionSort extends BaseSortAlgorithm {
  sort() {
    let min;
    let temp;

    for (let i = 0; i < this.algorithmData.length; i++) {
      min = i;
      for (let j = i + 1; j < this.algorithmData.length; j++) {
        if (
          this.algorithmData[min].Statistics.Flights.Total.toString().toLowerCase() >
          this.algorithmData[j].Statistics.Flights.Total.toString().toLowerCase()
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
