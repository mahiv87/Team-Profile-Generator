const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Method that returns office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Method that returns the role
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;