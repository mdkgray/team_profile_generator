const Manager = require('../lib/Manager');

// tests for manager class

test('Can define office number using constructor argument', () => {
    const testVal = 50;
    const manager = new Manager('Tim', 1, 'test@example.com', testVal);
    expect(manager.officeNumber).toBe(testVal);
});

test('getOfficeNumber() returns office number', () => {
    const testVal = 50;
    const manager = new Manager('Tim', 1, 'test@example.com', testVal);
    expect(manager.getOfficeNumber()).toBe(testVal);
});

test('getRole() function should return "Manager"', () => {
    const testVal = 'Manager';
    const manager = new Manager('Tim', 1, 'test@example.com', 50);
    expect(manager.getRole()).toBe(testVal);
});