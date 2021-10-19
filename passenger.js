import User from "./user.js";

class Passenger extends User  {
    constructor({userName, mobileNumber, age}) {
        super({userName, mobileNumber, age});
    }
}
export default Passenger;