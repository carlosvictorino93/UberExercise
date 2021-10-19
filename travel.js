class Travel {
    constructor({origin, destination, passengerId}) {
        this.origin = origin;
        this.destination = destination;
        this.distance = this.getDistance();
        this.travelPrice = this.getUnitPrice() * this.distance;
        this.passengerId = passengerId;
        this.passengerAcceptance = false;
        this.driverId;
        this.driverAcceptance = false;
        this.started = false;
        this.finished = false;
    }
    getDistance() {
        const x2 = (this.destination.latitude - this.origin.latitude) ^ 2;
        const y2 = (this.destination.longitude - this.origin.longitude) ^ 2;
        return (x2 + y2) ^ 0.5;
    }
    getUnitPrice() {
        return Math.round(Math.random()*(5-1.5) + 1.5);
    }
    acceptTravelByPassenger() {
        this.passengerAcceptance = true;
    }
    acceptTravelByDriver(driverId) {
        this.driverId = driverId;
        this.driverAcceptance = true;
    }
}
export default Travel;