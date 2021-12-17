class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name?"
            },
        ])
    };
    getId() {

    };
    getEmail() {

    };
    getRole() {

    };
}