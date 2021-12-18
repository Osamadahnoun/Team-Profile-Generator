const Employee = require('../lib/Employee');

test('tests class to create a new employee object', () => {
    const employee = new Employee('Osama', 924, 'odahnoun@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})