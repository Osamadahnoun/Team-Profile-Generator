const managerInfo = function(manager) {
    return `
    <div class="card column">
  <div class="card-content is-info">
    <div class="media">
            <div class="media-content">
        <p class="title is-4">${manager.name}</p>
        <p class="subtitle is-6">Manager</p>
      </div>
    </div>

    <div class="content">
      <div>ID: ${manager.id}</div>
      <div>Email: <a href="mailto:${manager.email}">${manager.email}</a></div>
      <div>Office Number: ${manager.officeNumber} </div>
    </div>
  </div>
</div>
    `
};

const engineerInfo = function(engineer) {
    return `
    <div class="card column">
  <div class="card-content">
    <div class="media">
            <div class="media-content">
        <p class="title is-4">${engineer.name}</p>
        <p class="subtitle is-6">Engineer</p>
      </div>
    </div>

    <div class="content">
      <div>ID: ${engineer.id}</div>
      <div>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></div>
      <div class="github"><a href="https://github.com/${engineer.github}">Githu Account</a></div>
    </div>
  </div>
</div>
    `
};

const internInfo = function(intern) {
    return `
    <div class="card column">
  <div class="card-content">
    <div class="media">
            <div class="media-content">
        <p class="title is-4">${intern.name}</p>
        <p class="subtitle is-6">Intern</p>
      </div>
    </div>

    <div class="content">
      <div>ID: ${intern.id}</div>
      <div>Email: <a href="mailto:${intern.email}">${intern.email}</a></div>
      <div>School: ${intern.school} </div>
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
        

        if (role == 'Manager') {
            const managerCard = managerInfo(employee);
            cardArray.push(managerCard);
        }
        if (role == 'Engineer') {
            const EngineerCard = engineerInfo(employee);
            cardArray.push(EngineerCard);
        }
        if (role == 'Intern') {
            const internCard = internInfo(employee);
            cardArray.push(internCard);
        }
    }

    console.log(cardArray)
    const employeeCards = cardArray.join('')


    const generateCards = htmlTemplate(employeeCards);
    return generateCards;
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
   <div class="columns">
    ${employeeCards}
   </div>
   
    </body>
    </html>
    `
}

module.exports = cardArrayCreator;



