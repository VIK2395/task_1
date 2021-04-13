class MonthlyFlightsByAirport {
  constructor(airport, flights, year, month) {
    this.Airport = airport;
    this.Flights = flights;
    this.Year = year;
    this.Month = month;
  }

  // compare(a, b) {
  //   const A = typeof a === 'string' ? a.toLowerCase() : a;
  //   const B = typeof b === 'string' ? b.toLowerCase() : b;

  //   if (A > B) return 1;
  //   if (A == B) return 0;
  //   if (A < B) return -1;
  // }
}

module.exports = MonthlyFlightsByAirport;
