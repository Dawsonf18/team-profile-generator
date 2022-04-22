const Employee = require('../lib/Employee')

describe('Employee Class', () => {
    describe('Initialization', () => {
        test('Should create an object with a name', () => {
            const employee = new Employee('Tim', 123, 'Tim@gmail.com');

            expect(employee.getName()).toEqual('Tim');
        });

        test('Should create an object with an id', () => {
            const employee = new Employee('Tim', 123, 'Tim@gmail.com');

            expect(employee.getId()).toEqual(123);
          
        });

        test('Should create an object with an email', () => {
            const employee = new Employee('Tim', 123, 'Tim@gmail.com');

            expect(employee.getEmail()).toEqual('Tim@gmail.com');
          
        });

        test('Should create an object with an id', () => {
            const employee = new Employee('Tim', 123, 'Tim@gmail.com');

            expect(employee.getRole()).toEqual('Employee');
          
        });
    });
});

