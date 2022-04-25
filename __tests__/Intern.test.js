const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getName', () => {
        it('should return a name', () => {
            const name = 'marcus';
            const result = new Intern(name, 1, 'intern@internship.com', 'University of Denver');

            expect(result.getName()).toEqual(name);
        })
    })
    describe('getID', () => {
        it('should return an ID', () => {
            const id = 1;
            const result = new Intern('marcus', id, 'intern@internship.com', 'University of Denver');

            expect(result.getID()).toEqual(id);
        })
    })
    describe('getEmail', () => {
        it('should return an email', () => {
            const email = 'intern@internship.com';
            const result = new Intern('marcus', 1, email, 'University of Denver');

            expect(result.getEmail()).toEqual(email);
        })
    })
    describe('getSchool', () => {
        it('should return a school', () => {
            const school = 'University of Denver';
            const result = new Intern('marcus', 1, 'intern@internship.com', school);

            expect(result.getSchool()).toEqual(school);
        })
    })
    describe('getRole', () => {
        it('should return a role', () => {
            const role = 'Intern';
            const result = new Intern('marcus', 1, 'intern@internship.com', 'University of Denver');

            expect(result.getRole()).toEqual(role);
        })
    })
})