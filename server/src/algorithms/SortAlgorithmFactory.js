const BubbleSort = require('./sort/Bubble');
const SelectionSort = require('./sort/Selection');
const QuickSort = require('./sort/Quick');

class Sort {
  static create(name) {
    let algorithm;

    switch (name) {
      case 'bubble':
        algorithm = new BubbleSort();
        break;
      case 'selection':
        algorithm = new SelectionSort();
        break;
      case 'quick':
        algorithm = new QuickSort();
    }

    return algorithm;
  }
}

module.exports = Sort;
