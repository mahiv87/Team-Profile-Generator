const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('getName', () => {
        it('should return a name', () => {
            const name = 'marcus';
            const result = new Manager(name, 1, 'manager@management.com', 999-999-9999);

            expect(result.getName()).toEqual(name);
        })
    })
    describe('getID', () => {
        it('should return an ID', () => {
            const id = 1;
            const result = new Manager('marcus', id, 'manager@management.com', 999-999-9999);

            expect(result.getID()).toEqual(id);
        })
    })
    describe('getEmail', () => {
        it('should return an email', () => {
            const email = 'manager@management.com';
            const result = new Manager('marcus', 1, email, 999-999-9999);

            expect(result.getEmail()).toEqual(email);
        })
    })
    describe('getOfficeNumber', () => {
        it('should return a phone number', () => {
            const number = 999-999-9999;
            const result = new Manager('marcus', 1, 'manager@management.com', number);

            expect(result.getOfficeNumber()).toEqual(number);
        })
    })
    describe('getRole', () => {
        it('should return the role', () => {
            const role = 'Manager';
            const result = new Manager('marcus', 1, 'manager@management.com', 999-999-9999);

            expect(result.getRole()).toEqual(role);
        })
    })
})