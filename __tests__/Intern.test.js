const Intern = require('../lib/Intern');

test('tests class to create a new intern object', () => {
    const intern = new Intern('Osama', 924, 'odahnoun@gmail.com', 'UNC-CH');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

})