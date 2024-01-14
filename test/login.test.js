const login = require('../login/login.js');

describe('login', () => {
    it('should throw an error if no parameters are passed', () => {
        expect(() => login.login()).toThrow();
    });

    it('should throw an error if only password o id is passed', () => {
        expect(() => login.login('azerty')).toThrow();
    });

    it('should throw an error if password is wrong', () => {
        expect(() => login.login('anthony', 'qwerty')).toThrow();
    });
    it('should return true if id and password are correct', () => {
        expect(login.login('anthony', 'azerty')).toBeTruthy();
    });
    it('should return true if id and password are correct', () => {
        expect(login.login('anthony', 'azerty')).not.toBeFalsy();
    });

});


