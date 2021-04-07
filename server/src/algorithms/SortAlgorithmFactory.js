const BubbleSort = require('./sort/Bubble');
const SelectionSort = require('./sort/Selection');

class Sort {
  static create(type) {
    let algorithm;

    switch (type) {
      case 'bubble':
        algorithm = new BubbleSort();
        break;
      case 'selection':
        algorithm = new SelectionSort();
        break;
    }

    return algorithm;
  }
}

module.exports = Sort;
