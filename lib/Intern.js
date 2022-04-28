const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // Method returns School
    getSchool() {
        return this.school;
    }

    // Method returns role
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;