const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // Method returns Github username
    getGithub() {
        return this.github;
    }

    // Method returns role
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;