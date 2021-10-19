import Uber from './uber.js';
import Driver from './driver.js';
import Passenger from './passenger.js';
import Location from './location.js';

const uber = new Uber();

// Drivers Creation
const driver1 = new Driver ({userName: 'Rafael', mobileNumber:'55 11 95664-2552', age: 21, cnh: '226262', cpf: '54584544', carYear: 2018 });
const driver1Id = uber.createDriver(driver1);
console.log(uber.getDriver(driver1Id));

const driver2 = new Driver ({userName: 'Chico', mobileNumber:'55 11 95664-2553', age: 25, cnh: '125115', cpf: '8454554', carYear: 2019 });
const driver2Id = uber.createDriver(driver2);
console.log(uber.getDriver(driver2Id));

const driver3 = new Driver ({userName: 'Beto', mobileNumber:'55 11 95664-2555', age: 37, cnh: '545576', cpf: '88984544', carYear: 2021 });
const driver3Id = uber.createDriver(driver3);
console.log(uber.getDriver(driver3Id));

const driver4 = new Driver ({userName: 'Silva', mobileNumber:'55 11 95664-2559', age: 40, cnh: '54545', cpf: '55584544', carYear: 2017 });
const driver4Id = uber.createDriver(driver4);
console.log(uber.getDriver(driver4Id));

const driver5 = new Driver ({userName: 'Beatriz', mobileNumber:'55 11 95664-2122', age: 18, cnh: '22655', cpf: '5554544', carYear: 2020 });
const driver5Id = uber.createDriver(driver5);
console.log(uber.getDriver(driver5Id));

// Passenger A's actions
const passenger1 = new Passenger ({userName: 'Maria', mobileNumber:'55 11 95654-2122', age: 36 });
const passenger1Id = uber.createPassenger(passenger1);
console.log(uber.getPassenger(passenger1Id));
const locationOrigin = new Location({latitude: (Math.random()*(-23.7-23.6)/23.6 - 23.6), longitude: (Math.random()*(-46.7-46.6)/46.6 - 46.6)});
const locationDestination = new Location({latitude: (Math.random()*(-23.7-23.6)/23.6 - 23.6), longitude: (Math.random()*(-46.7-46.6)/46.6 - 46.6)});
const proposalId = uber.setNewProposal(locationOrigin, locationDestination, passenger1Id);
console.log('To Passenger: ', uber.showProposal(proposalId));
console.log(uber.acceptTravelByPassenger(proposalId));

// Driver X's actions
console.log('To Driver: ', uber.showProposal(proposalId));
console.log(uber.acceptTravelByDriver(proposalId, Math.floor(Math.random()*4 + 0)));
console.log(uber.startTravel(proposalId));
console.log(uber.finishTravel(proposalId));
console.log(uber.addRattingPassenger(5, proposalId));

// Passenger A's actions
console.log(uber.addRattingDriver(4, proposalId));

