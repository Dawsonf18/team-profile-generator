const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});

test('creates name for employee via arguments', () => {
    const name = 'John';
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test('creates id for employee', () => {
    const id = 100;
    const emp = new Employee(id);
    expect(emp.name)
})

test('can set email via arguments', () => {
    
})