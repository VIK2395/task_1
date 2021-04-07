class Airport {
  constructor() {
    this.flights = [];
  }

  addFlight(flight) {
    this.flights.push(flight);
  }

  getCarriers() {
    const carriersSet = new Set();

    this.flights.forEach((flight) => {
      carriersSet.add(flight.carrier);
    });

    const names = Array.from(carriersSet);

    const carriers = {
      names: names.join(', '),
      total: carriersSet.size,
    };

    return carriers;
  }
}

class Flight {
  constructor(carrier) {
    this.carrier = carrier;
  }
}

const airport = new Airport();

airport.addFlight(new Flight('American Airlines Inc'));
airport.addFlight(new Flight('xyz'));
airport.addFlight(new Flight('xyz'));

console.log(airport.getCarriers());
