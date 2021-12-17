const managerCard = function(manager) {
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

const EngineerCard = function(engineer) {
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

const InternCard = function(intern) {
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

// module.exports = {
//     managerCard,
//     EngineerCard
// }