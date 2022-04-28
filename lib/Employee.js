class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Method returns a name
    getName() {
        return this.name;
    }

    // Method returns an id
    getID() {
        return this.id;
    }

    // Method returns an email
    getEmail() {
        return this.email;
    }

    // Method returns role
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;