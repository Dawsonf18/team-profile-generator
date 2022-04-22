const Engineer = require('../lib/Engineer')

describe('Engineer Class', () => {
    describe('Initialization', () => {
        it('Should create an object with a name', () => {
            const engineer = new Engineer('Tim', 123, 'tim@gmail.com', 'tim18');

            expect(engineer.getName()).toEqual('Tim');
        });

        it('Should create an object with an id', () => {
            const engineer = new Engineer('Tim', 123, 'tim@gmail.com', 'tim18');

            expect(engineer.getId()).toEqual(123);

        });
        it('Should create an object with an email', () => {
            const engineer = new Engineer('Tim', 123, 'tim@gmail.com', 'tim18');

            expect(engineer.getEmail()).toEqual('tim@gmail.com');
        });

        it('Should create an object with a github', () => {
            const engineer = new Engineer('Tim', 123, 'tim@gmail.com', 'tim18');

            expect(engineer.getGithub()).toEqual('tim18');

        });

    });
});