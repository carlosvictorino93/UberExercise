class User {
    constructor({userName, mobileNumber, age}) {
        this.userName = userName;
        this.mobileNumber = mobileNumber;
        if (age < 18) throw 'Invalid User';
        this.age = age;
        this._balance = 100;
        this._score = 5;
    }
    getBalance(){
        return this._balance;
    }
    deposit(value) {
        this._balance += Math.abs(value);
    }
    withdraw(value) {
        this._balance -= Math.abs(value);
    }
    addRatting(grade) {
        this._score = (this._score + grade)/2
    }
}
export default User;