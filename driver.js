import User from "./user.js";

class Driver extends User {
    constructor({userName, mobileNumber, age, cnh, cpf, carYear, }) {
        super({userName, mobileNumber, age});
        this.cnh = cnh;
        this.cpf = cpf;
        if (carYear <= 2016) throw 'Invalid Car';
        this.carYear = carYear;
        this._balance = 0;
    }
}

export default Driver;