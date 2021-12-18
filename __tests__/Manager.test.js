const Manager = require('../lib/Manager');

test('tests class to create a new manager object', () => {
    const manager = new Manager('Osama', 924, 'odahnoun@gmail.com', 199);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

})