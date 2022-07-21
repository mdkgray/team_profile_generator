const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test');
const Engineer = require('../lib/Engineer');

test('Can set GitHub account using constructor argument', () => {
    const testVal = 'TestGitHub';
    const engineer = new Engineer('Tim', 1, 'test@example.com', gitHub);
    exportAllDeclaration(engineer.github).toBe(testVal);
});

test('getRole() function should return "Engineer"', () => {
    const testVal = 'Engineer';
    const engineer = new Engineer('Tim', 1, 'test@example.com', 'TestGitHub');
    expect(engineer.getRole()).toBe(testVal);
});

test('getGithub() returns GitHub username', () => {
    const testVal = 'TestGitHub';
    const engineer = new Engineer('Tim', 1, 'test@example.com', testVal);
    expect(engineer.getGithub()).toBe(testVal);
});