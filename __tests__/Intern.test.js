const Intern = require('../lib/Intern')

describe('Intern Class', () => {
    describe('Initialization', () => {
        it('Should create an object with a name', () => {
            const intern = new Intern('Tim', 123, 'tim@gmail.com', 'UCF')

            expect(intern.getName()).toEqual('Tim');
        });

        it('Should create an object with an id', () => {
            const intern = new Intern('Tim', 123, 'tim@gmail.com', 'UCF')

            expect(intern.getId()).toEqual(123);
        
        });

        it('Should create an object with an email', () => {
            const intern = new Intern('Tim', 123, 'tim@gmail.com', 'UCF')

            expect(intern.getEmail()).toEqual('tim@gmail.com');
        
        });

        it('Should create an object with a school', () => {
            const intern = new Intern('Tim', 123, 'tim@gmail.com', 'UCF')

            expect(intern.getSchool()).toEqual('UCF');
        
        });
    });
});