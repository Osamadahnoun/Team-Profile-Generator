const Engineer = require('../lib/Engineer');

test('tests class to create a new engineer object', () => {
    const engineer = new Engineer('Osama', 924, 'odahnoun@gmail.com', 'osamadahnoun');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

})