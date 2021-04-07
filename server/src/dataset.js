const fs = require('fs');
const path = require('path');

class DataSet {
  constructor() {
    this._data = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../public/assets', 'data.json'))
    );
  }

  get getData() {
    return this._data;
  }
}

module.exports = new DataSet();
