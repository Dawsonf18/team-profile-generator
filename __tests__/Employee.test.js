const Employee = require('../lib/Employee');

describe('Employee Class', () => {
    describe('Initialization', () => {
        test('Should create an object with an id and name', () => {
            const employee = new Employee('123, Jim');

            expect(employee.id).toEqual(123);
            expect(employee.name).toEqual('Jim');
        });
    });
});

