const fs = require('fs');
const path = require('path');
const MonthlyFlightsByAirport = require('./models/MonthlyFlightsByAirport');

// read init data
const initData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../public/assets', 'data.json'))
);

const data = initData.map((entity) => {
  return new MonthlyFlightsByAirport(
    entity.Airport.Name,
    entity.Statistics.Flights.Total,
    entity.Time.Year,
    entity.Time['Month Name']
  );
});

class DataSet {
  constructor() {
    this._data = data;
  }

  get getData() {
    return this._data;
  }
}

module.exports = new DataSet();
