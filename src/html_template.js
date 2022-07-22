const generateTeamProfile = (teamData) => {
    // function to generate card for manager
    const generateManager = (manager) => {
        return `
        <div class="card employee-card shadow p-3 mb-5 bg-body rounded">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    // function to generate card for engineer
    const generateEngineer = (engineer) => {
        return `
        <div class="card employee-card shadow p-3 mb-5 bg-body rounded">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>    
        `;
    };

    // function to generate card for intern
    const generateIntern = (intern) => {
        return `
        <div class="card employee-card shadow p-3 mb-5 bg-body rounded">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>    
        `;
    };

    // empty array for generated team cards 
    const teamArray = [];

    // push cards into the array
    teamArray.push(
        teamData
         .filter((employee) => employee.getRole() === 'Manager')
         .map((manager) => generateManager(manager))
    );
    teamArray.push(
        teamData
         .filter((employee) => employee.getRole() === 'Engineer')
         .map((engineer) => generateEngineer(engineer))
         .join('')
    );
    teamArray.push(
        teamData
         .filter((employee) => employee.getRole() === 'Intern')
         .map((intern) => generateIntern(intern))
         .join('')
    );

    return teamArray.join('');
};

// export function to generate generated HTML page 
module.exports = (teamData) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Work Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">        
        <link rel="stylesheet" href="../dist/style.css">        
    </head>
    <body>
        <div class="container-fluid text-bg-danger">
            <div id="header-row" class="row align-items-center">
                <div class="col-12 jumbotron mb-3 team-heading text-bg-danger p-3">
                    <h1 class="text-center fs-1">My Awesome Work Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 mt-5 d-flex justify-content-evenly">
                    ${generateTeamProfile(teamData)}
                </div>
            </div>
        </div>

        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};