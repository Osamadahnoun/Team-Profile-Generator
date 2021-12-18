const fs = require('fs');
const inquirer = require('inquirer');
const cardArrayCreator = require('./src/generate.js')

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
    ])
    .then(managerData => {
        const { managerName, managerId, managerEmail, managerOffice } = managerData;
        const manager = new Manager (managerName, managerId, managerEmail, managerOffice);

        employeesArray.push(manager);
        console.log(employeesArray);

        // if (managerData.teamMember == 'Engineer') {
        //     return askEngineer(employeesArray);
        // }
        // else if (managerData.teamMember == 'Intern') {
        //     return askIntern(employeesArray);
        // } 
        // else {
        //     return employeesArray
        // }
    }) 
};

    const isEngineerOrIntern = function() {
        return inquirer.prompt ([
            {
                type: 'checkbox',
                name: 'teamMember',
                message: "Which type of team member would you like to add?",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'EngineerName',
                message: "What is your engineer's name?",
                when: ({teamMember}) => teamMember == "Engineer"
            },
            {
                type: 'input',
                name: 'EngineerId',
                message: "What is your engineer's ID?",
                when: ({teamMember}) => teamMember == "Engineer"
            },
            {
                type: 'input',
                name: 'EngineerEmail',
                message: "What is your engineer's email?",
                when: ({teamMember}) => teamMember == "Engineer"
            },
            {
                type: 'input',
                name: 'EngineerGitHub',
                message: "What is your engineer's GitHub username?",
                when: ({teamMember}) => teamMember == "Engineer"
            },
            {
                type: 'input',
                name: 'internName',
                message: "What is your intern's name?",
                when: ({teamMember}) => teamMember == "Intern"
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is your intern's ID?",
                when: ({teamMember}) => teamMember == "Intern"
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is your intern's email?",
                when: ({teamMember}) => teamMember == "Intern"
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is your intern's school?",
                when: ({teamMember}) => teamMember == "Intern"
            },
            {
                type: 'confirm',
                name: 'confirmFinish',
                message: 'Would you like to add anymore team members?',
                default: true   
            }
        ])
        .then(data => {
            let {teamMember, EngineerName, EngineerId, EngineerEmail, EngineerGitHub, internName, internId, internEmail, internSchool, confirmFinish} = data;
            let individual;

            if (teamMember == "Engineer") {
                individual = new Engineer (EngineerName, EngineerId, EngineerEmail, EngineerGitHub);
                // console.log(individual)
            } 
            else if (teamMember == "Intern") {
                individual = new Intern (internName, internId, internEmail, internSchool);
                // console.log(individual);
            }

            employeesArray.push(individual);
            

            if (confirmFinish) {
                return isEngineerOrIntern(employeesArray);
            }
            else {
                console.log(employeesArray)
                return employeesArray;
            }

        })
    }

    // const askEngineer = () => {
    //     return inquirer.prompt([
    //         {
    //             type: 'input',
    //             name: 'EngineerName',
    //             message: "What is your engineer's name?"
    //         },
    //         {
    //             type: 'input',
    //             name: 'EngineerId',
    //             message: "What is your engineer's ID?"
    //         },
            // {
            //     type: 'input',
            //     name: 'EngineerEmail',
            //     message: "What is your engineer's email?"
            // },
            // {
            //     type: 'input',
            //     name: 'EngineerGitHub',
            //     message: "What is your engineer's GitHub username?"
            // },
    //         {
    //             type: 'checkbox',
    //             name: 'teamMember',
    //             message: "Which type of team member would you like to add?",
    //             choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
    //             // when: ({managerOffice}) => managerOffice,
    //             // // when: ({EngineerGitHub}) => EngineerGitHub,
    //             // // when: ({internSchool}) => internSchool,
    //         },
    //     ])
    //     .then(engineerData => {
    //     const { EngineerName, EngineerId, EngineerEmail, EngineerGitHub } = engineerData;
    //     const engineer = new Engineer (EngineerName, EngineerId, EngineerEmail, EngineerGitHub);

    //     employeesArray.push(engineer);
    //     console.log(employeesArray);

    //         if (engineerData.teamMember == 'Engineer') {
    //             return askEngineer(employeesArray);
    //         }
    //         else if (engineerData.teamMember == 'Intern') {
    //             return askIntern(employeesArray);
    //         } 
    //         else {
    //             return employeesArray
    //         }
    //     })  
    // };

    // const askIntern = () => {
    //     return inquirer.prompt([
    //         {
    //             type: 'input',
    //             name: 'internName',
    //             message: "What is your intern's name?"
    //         },
    //         {
    //             type: 'input',
    //             name: 'internId',
    //             message: "What is your intern's ID?"
    //         },
            // {
            //     type: 'input',
            //     name: 'internEmail',
            //     message: "What is your intern's email?"
            // },
            // {
            //     type: 'input',
            //     name: 'internSchool',
            //     message: "What is your intern's school?"
            // },
    //         {
    //             type: 'checkbox',
    //             name: 'teamMember',
    //             message: "Which type of team member would you like to add?",
    //             choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
    //             // when: ({managerOffice}) => managerOffice,
    //             // // when: ({EngineerGitHub}) => EngineerGitHub,
    //             // // when: ({internSchool}) => internSchool,
    //         },
    //     ])
    //     .then(internData => {
    //         const { internName, internId, internEmail, internSchool} = internData;
    //         const intern = new Intern (internName, internId, internEmail, internSchool);

    //         employeesArray.push(intern);
    //         console.log(employeesArray);

    //         if (internData.teamMember == 'Engineer') {
    //             return askEngineer(employeesArray);
    //         }
    //         else if (internData.teamMember == 'Intern') {
    //             return askIntern(employeesArray);
    //         } 
    //         else {
    //             return employeesArray
    //         }
    //     })  
    // };
    
// askManager().then(isEngineerOrIntern)
// .then(employeesArray => {
//     return cardArrayCreator(employeesArray);
// })
// .then(html => {
//     // console.log(answers.title)
//     fs.writeFile('./dist/index.html', html, err => {
//           if (err) {
//           console.log(err);
//            return;
//           }
//         console.log('Page created! Check out README.md in this directory to see it!');
//     }
//     )
// })

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

askManager().then(isEngineerOrIntern)
  .then(employeesArray => {
    return cardArrayCreator(employeesArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });

