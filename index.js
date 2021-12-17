const fs = require('fs');
const inquirer = require('inquirer');

const askManager = data => {
    console.log('Please build your team');

    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's ID?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?"
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's office number?"
        },
        {
            type: 'checkbox',
            name: 'teamMember',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
            // when: ({managerOffice}) => managerOffice,
            // // when: ({EngineerGitHub}) => EngineerGitHub,
            // // when: ({internSchool}) => internSchool,
        },
       
    ])
    .then(data => {
        if (data.teamMember == 'Engineer') {
            return askEngineer(data);
        }
        else if (data.teamMember == 'Intern') {
            return askIntern(data);
        } 
        else {
            return data
        }
    }) 
};

    const askEngineer = data => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'EngineerName',
                message: "What is your engineer's name?"
            },
            {
                type: 'input',
                name: 'EngineerId',
                message: "What is your engineer's ID?"
            },
            {
                type: 'input',
                name: 'EngineerEmail',
                message: "What is your engineer's email?"
            },
            {
                type: 'input',
                name: 'EngineerGitHub',
                message: "What is your engineer's GitHub username?"
            },
            {
                type: 'checkbox',
                name: 'teamMember',
                message: "Which type of team member would you like to add?",
                choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
                // when: ({managerOffice}) => managerOffice,
                // // when: ({EngineerGitHub}) => EngineerGitHub,
                // // when: ({internSchool}) => internSchool,
            },
        ])
        .then(data => {
            if (data.teamMember == 'Engineer') {
                return askEngineer(data);
            }
            else if (data.teamMember == 'Intern') {
                return askIntern(data);
            } 
            else {
                return data
            }
        })  
    };

    const askIntern = data => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is your intern's name?"
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is your intern's ID?"
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is your intern's email?"
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is your intern's school?"
            },
            {
                type: 'checkbox',
                name: 'teamMember',
                message: "Which type of team member would you like to add?",
                choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
                // when: ({managerOffice}) => managerOffice,
                // // when: ({EngineerGitHub}) => EngineerGitHub,
                // // when: ({internSchool}) => internSchool,
            },
        ])
        .then(data => {
            if (data.teamMember == 'Engineer') {
                return askEngineer(data);
            }
            else if (data.teamMember == 'Intern') {
                return askIntern(data);
            } 
            else {
                return data
            }
        })  
    }
    

askManager().then(answers => {
    console.log(answers)
});
