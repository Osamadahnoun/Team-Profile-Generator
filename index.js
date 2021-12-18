const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./src/generate.js')

const employeesArray = [];

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const askManager = function() {
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
            choices: ['Engineer', 'Intern', "I don't want to add any more team members!"]
        },
         
    ])
    .then(managerData => {
        const { managerName, managerId, managerEmail, managerOffice } = managerData;
        const manager = new Manager (managerName, managerId, managerEmail, managerOffice);

        employeesArray.push(manager);
        console.log(employeesArray);

        if (managerData.teamMember == 'Engineer') {
            return askEngineer(employeesArray);
        }
        else if (managerData.teamMember == 'Intern') {
            return askIntern(employeesArray);
        } 
        else {
            return employeesArray
        }
    }) 
};
    const askEngineer = () => {
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
            },
        ])
        .then(engineerData => {
        const { EngineerName, EngineerId, EngineerEmail, EngineerGitHub } = engineerData;
        const engineer = new Engineer (EngineerName, EngineerId, EngineerEmail, EngineerGitHub);

        employeesArray.push(engineer);
        console.log(employeesArray);

            if (engineerData.teamMember == 'Engineer') {
                return askEngineer(employeesArray);
            }
            else if (engineerData.teamMember == 'Intern') {
                return askIntern(employeesArray);
            } 
            else {
                return employeesArray
            }
        })  
    };

    const askIntern = () => {
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
            },
        ])
        .then(internData => {
            const { internName, internId, internEmail, internSchool} = internData;
            const intern = new Intern (internName, internId, internEmail, internSchool);

            employeesArray.push(intern);
            console.log(employeesArray);

            if (internData.teamMember == 'Engineer') {
                return askEngineer(employeesArray);
            }
            else if (internData.teamMember == 'Intern') {
                return askIntern(employeesArray);
            } 
            else {
                return employeesArray
            }
        })  
    };
    
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    console.log("Team profile generated! Please chekc the dist directory for the html file!")
                }
            })
}



askManager().then(employeesArray => {
    return generate(employeesArray)
})
.then(html => {
    return writeFile(html);
})
.catch(err => {
    console.log(err)
})



