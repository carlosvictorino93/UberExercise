import Travel from "./travel.js";

class Uber {
    constructor() {
        this.proposals = [];
        this.drivers = [];
        this.passengers = [];
        this._balance = 0;
    }
    setNewProposal(origin, destination, passengerId) {
        const proposal = new Travel({origin: origin, destination: destination, passengerId: passengerId })
        this.proposals.push(proposal);
        return this.proposals.length - 1; 
    }
    showProposal(proposalId) {
        const proposal = this.proposals[proposalId];
        return `Distance ${proposal.distance} for ${proposal.travelPrice}`
    }
    acceptTravelByPassenger(proposalId) {
        this.proposals[proposalId].acceptTravelByPassenger();
        const passengerId = this.proposals[proposalId].passengerId;
        const price = this.proposals[proposalId].travelPrice;
        this.passengers[passengerId].withdraw(price);
        return `The Passenger ${passengerId} has accepted the travel ${proposalId}!`;
    }
    acceptTravelByDriver(proposalId, driverId) {
        this.proposals[proposalId].acceptTravelByDriver(driverId);
        return `The Driver ${driverId} has accepted the travel ${proposalId}!`;
    }
    startTravel(proposalId) {
        this.proposals[proposalId].started = true;
        return `The travel ${proposalId} has started!`;
    }
    finishTravel(proposalId) {
        this.proposals[proposalId].finished = true;
        const driverId = this.proposals[proposalId].driverId;
        const value = 0.75 * this.proposals[proposalId].travelPrice;
        this.drivers[driverId].deposit(value);
        return `The travel ${proposalId} has finished!`;
    }
    createPassenger(passenger) {
        this.passengers.push(passenger);
        this._balance -= 100;
        return this.passengers.length - 1;
    }
    getPassenger(passengerId) {
        return this.passengers[passengerId];
    }
    addRattingPassenger(grade, proposalId){
        const passengerId = this.proposals[proposalId].passengerId;
        this.passengers[passengerId].addRatting(grade);
        return this.passengers[passengerId];
    }
    createDriver(driver) {
        this.drivers.push(driver);
        return this.drivers.length - 1;
    }
    getDriver(driverId) {
        return this.drivers[driverId];
    }
    addRattingDriver(grade, proposalId){
        const driverId = this.proposals[proposalId].driverId;
        this.drivers[driverId].addRatting(grade);
        return this.drivers[driverId];
    }
}
export default Uber;