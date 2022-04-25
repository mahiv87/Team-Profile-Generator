const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getName', () => {
        it('should return a name', () => {
            const name = 'marcus';
            const result = new Engineer(name, 1, 'engineer@engineering.com', 'mahiv87');

            expect(result.getName()).toEqual(name);
        })
    })
    describe('getID', () => {
        it('should return an ID', () => {
            const id = 1;
            const result = new Engineer('marcus', id, 'engineer@engineering.com', 'mahiv87');

            expect(result.getID()).toEqual(id);
        })
    })
    describe('getEmail', () => {
        it('should return an email', () => {
            const email = 'engineer@engineering.com';
            const result = new Engineer('marcus', 1, email, 'mahiv87');

            expect(result.getEmail()).toEqual(email);
        })
    })
    describe('getGithub', () => {
        it('should return Github username', () => {
            const github = 'mahiv87';
            const result = new Engineer('marcus', 1, 'engineer@engineering.com', github);

            expect(result.getGithub()).toEqual(github);
        })
    })
    describe('getRole', () => {
        it('should return a role', () => {
            const role = 'Engineer';
            const result = new Engineer('marcus', 1, 'engineer@engineering.com', 'mahiv87');

            expect(result.getRole()).toEqual(role);
        })
    })
})