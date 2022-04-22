const Manager = require('../lib/Manager')

describe('Manager Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an name', () => {
            const manager = new Manager('Tim', 123, 'tim@gmail.com', 456)

            
            expect(manager.getName()).toEqual('Tim');
        });

        it('Should create an object with an id', () => {
            const manager = new Manager('Tim', 123, 'tim@gmail.com', 456)

            expect(manager.getId()).toEqual(123);
            
        });

        it('Should create an object with an email', () => {
            const manager = new Manager('Tim', 123, 'tim@gmail.com', 456)

            expect(manager.getEmail()).toEqual('tim@gmail.com');
            
        });

        it('Should create an object with an office number', () => {
            const manager = new Manager('Tim', 123, 'tim@gmail.com', 456)

            expect(manager.getOfficeNumber()).toEqual(456);
            
        });
    });
});