const Employee = require('../lib/Employee');

test('Instantiation of Employee instance', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('Can pass name with constructor argument', () => {
    const name = 'Robert';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('Can pass id with constructor argument', () => {
    const idNumber = 50;
    const employee = new Employee('Tim', idNumber);
    expect(employee.id).toBe(idNumber);
});

test('Can pass email with constructor argument', () => {
    const email = 'test@example.com';
    const employee = new Employee('Tim', 1, email);
    expect(employee.email).toBe(email);
});

test('Can get name with getName()', () => {
    const name = 'Robert';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test('Can get id with getId()', () => {
    const idNumber = 50;
    const employee = new Employee('Tim', idNumber);
    expect(employee.getId()).toBe(idNumber);
});

test('Can get email with getEmail()', () => {
    const email = 'test@example.com';
    const employee = new Employee('Tim', 1, email);
    expect(employee.getEmail()).toBe(email);
});

test('getRole() should return "Employee"', () => {
    const roleSelection = 'Employee';
    const employee = new Employee('Tim', 1, 'test@example.com');
    expect(employee.getRole()).toBe(roleSelection);
});