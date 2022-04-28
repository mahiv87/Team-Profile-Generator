const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should return an object containing a property when called with the "new" keyword', () => {
            const obj = new Employee();

            expect('name' in obj).toEqual(true);
        })
    })

    describe('getName', () => {
        it('should return a name', () => {
            const name = 'marcus';
            const result = new Employee(name, 1, 'marcus@gmail.com');

            expect(result.getName()).toEqual(name);
        })
    })
    
    describe('getID', () => {
        it('should return an ID', () => {
            const id = 1;
            const result = new Employee('marcus', id, 'marcus@gmail.com');
    
            expect(result.getID()).toEqual(id);
        })
    })

    describe('getEmail', () => {
        it('should return an email', () => {
            const email = 'marcus@gmail.com';
            const result = new Employee('marcus', 1, email);

            expect(result.getEmail()).toEqual(email);
        })
    })

    describe('getRole', () => {
        it('should return a role', () => {
            const role = 'Employee';
            const result = new Employee('marcus', 1, 'marcus@gmail.com');

            expect(result.getRole()).toEqual(role);
        })
    })
})