// require inquirer for questions
const inquirer = require('inquirer');

// require for each role 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// require fs for write file 
const fs = require('fs');

// require for html template page
const generateTeamProfile = require('./src/html_template');
// const { async } = require('rxjs');

// empty array for team data
const teamData = [];

// add in function for validation
function validateUserInput(teamData) {
    if (teamData != '') {
        return true;
    } else {
        return 'Please enter a response to the question.';
    }
};

// inquirer function for questions for user 
const userQuestions = async () => {
    const answers = await inquirer 
      .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
            validate: validateUserInput,
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'id',
            validate: validateUserInput,
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            validate: function(teamData) {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(teamData)) {
                    return true;
                } else {
                    return 'Not a valid email address. Please enter your email again.';
                }
            },
        },
        {
            type: 'list',
            message: 'What is your role?',
            name: 'role',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
            ],
            validate: validateUserInput,
        }
      ])

       // questions specific to manager selection
       if (answers.role === 'Manager') {
         const managerQuestion = await inquirer
         .prompt([
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'officeNumber',
                validate: validateUserInput,
            },
         ])
         const newManager = new Manager(
            answers.name, 
            answers.id, 
            answers.email,
            managerQuestion.officeNumber,
         );
         teamData.push(newManager);

         // questions specific to engineer selection
        } else if (answers.role === 'Engineer') {
            const gitHubQuestion = await inquirer
         .prompt([
            {
                type: 'input',
                message: 'What is your GitHib username?',
                name: 'github',
                validate: validateUserInput,
            },
          ])
          const newEngineer = new Engineer(
            answers.name, 
            answers.id, 
            answers.email,
            gitHubQuestion.github,
          );
          teamData.push(newEngineer);     

         // questions specific to intern selection
        } else if (answers.role === 'Intern') {
            const internQuestion = await inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What university did you attend?',
                    name: 'school',
                    validate: validateUserInput,
                },
            ])
            const newIntern = new Intern(
                answers.name, 
                answers.id, 
                answers.email, 
                internQuestion.school,
            );
            teamData.push(newIntern);
        }
};

// async function to handle questions which includes promises 
async function questionPrompt() {
    await userQuestions()

    // prompt user if they want to add another team member
    const addMemberQuestion = await inquirer
    .prompt([
        {
            type: 'confirm',
            message: 'Would you like to add another team member?',
            name: 'addMember',
            validate: validateUserInput,
        }
    ])

    if (addMemberQuestion.addMember === true) {
        return questionPrompt()
    }
    return generateTeamProfile(teamData);
};

// function to control flow of application
const init = () => {
    questionPrompt()
    .then((teamData) => fs.writeFileSync('./dist/index.html', teamData))
    .then(() => console.log('Successfully created HTML web page.'))
    .catch((err) => console.log(err));
};

// function to initialize the application
init();