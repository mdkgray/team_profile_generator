const { default: test } = require('node:test');
const Intern = require('../lib/Intern');

test('Can get school using constructor argument', () => {
    const testVal = 'USYD';
    const intern = new Intern('Tim', 1, 'test@example.com', testVal);
    expect(intern.school).toBe(testVal);
});

test('getSchool() returns school', () => {
    const testVal = 'USYD';
    const intern = new Intern('Tim', 1, 'test@example.com', testVal);
    expect(intern.getSchool()).toBe(testVal);
});

test('getRole() function should return "Intern"', () => {
    const testVal = 'Intern';
    const intern = new Intern('Tim', 1, 'test@example.com', 'USYD');
    expect(intern.getRole()).toBe(testVal);
});