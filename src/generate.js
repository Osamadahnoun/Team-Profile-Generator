const managerInfo = function(manager) {
    return `
    <div class="card column is-one-third">
  <div class="card-content">
    <div class="media">
            <div class="media-content">
        <p class="title is-4">${manager.managerName}</p>
        <p class="subtitle is-6">Manager</p>
      </div>
    </div>

    <div class="content">
      <div>ID: ${manager.managerId}</div>
      <div>Email: ${manager.managerEmail}</div>
      <div>Office Number: ${manager.managerOffice} </div>
    </div>
  </div>
</div>
    `
};

const engineerInfo = function(engineer) {
    return `
    <div class="card column is-one-third">
  <div class="card-content">
    <div class="media">
            <div class="media-content">
        <p class="title is-4">${engineer.EngineerName}</p>
        <p class="subtitle is-6">Manager</p>
      </div>
    </div>

    <div class="content">
      <div>ID: ${engineer.EngineerId}</div>
      <div>Email: ${engineer.EngineerEmail}</div>
      <div>GitHub: ${engineer.EngineerGitHub} </div>
    </div>
  </div>
</div>
    `
};

const internInfo = function(intern) {
    return `
    <div class="card column is-one-third">
  <div class="card-content">
    <div class="media">
            <div class="media-content">
        <p class="title is-4">${intern.internName}</p>
        <p class="subtitle is-6">Manager</p>
      </div>
    </div>

    <div class="content">
      <div>ID: ${intern.internId}</div>
      <div>Email: ${intern.internEmail}</div>
      <div>School: ${intern.internSchool} </div>
    </div>
  </div>
</div>
    `
};

const cardArrayCreator = function(data) {
    cardArray = [];

    for (let i=0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        

        if (role === 'Manager') {
            const managerCard = managerInfo(employee);
            cardArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const EngineerCard = engineerInfo(employee);
            cardArray.push(EngineerCard);
        }

        if (role === 'Intern') {
            const internCard = internInfo(employee);
            cardArray.push(internCard);
        }
        console.log(cardArray)
        const employeeCards = cardArray.join('')


        const generateCards = htmlTemplate(employeeCards);
        return generateCards;
    }
};

const htmlTemplate = function(employeeCards) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <section class="hero is-info">
        <div class="hero-body has-text-centered">
        <p class="title">
            Team Profile Generator
        </p>
      </div>
   </section> 
   <section>
    ${employeeCards}
   </section>
    </body>
    </html>
    `
}



module.exports = cardArrayCreator;