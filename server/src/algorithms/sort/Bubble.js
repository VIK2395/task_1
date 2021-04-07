const BaseSortAlgorithm = require('./BaseSortAlgorithm');

class BubbleSort extends BaseSortAlgorithm {
  sort() {
    for (let i = 0; i < this.algorithmData.length; i++) {
      for (let j = 0; j < this.algorithmData.length; j++) {
        if (
          this.algorithmData[j + 1] &&
          this.algorithmData[j].Statistics.Flights.Total.toString().toLowerCase() >
            this.algorithmData[j + 1].Statistics.Flights.Total.toString().toLowerCase()
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
