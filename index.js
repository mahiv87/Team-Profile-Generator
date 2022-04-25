const inquirer = require('inquirer');
const fs = require('fs');
const renderHtml = require('./src/renderHtml');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArr = [];

const managerQuestions = [
  {
    type: 'input',    
    name: 'name',
    message: 'What is the Managers name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the Managers email?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the Managers ID?',
  },
  {
    type: 'input',
    name: 'office',
    message: 'What is the Office number?',
  },
]

const addMember = [
  {
    type: 'list',
    name: 'role',
    message: 'Which type of team member would you like to add?',
    choices: ['Engineer', 'Employee', 'Intern', 'I dont want to add anymore team members']
  },
]

const engineerQuestions = [
  {
    type: 'input',
    name: 'engName',
    message: 'What is the Engineers name?',
  },
  {
    type: 'input',
    name: 'engId',
    message: 'What is the Engineers ID?',
  },
  {
    type: 'input',
    name: 'engEmail',
    message: 'What is the Engineers email?',
  },
  {
    type: 'input',
    name: 'engGithub',
    message: 'What is the Engineers GitHub username?',
  },
]

const employeeQuestions = [
  {
    type: 'input',    
    name: 'empName',
    message: 'What is the Employees name?',
  },
  {
    type: 'input',
    name: 'empEmail',
    message: 'What is the Employees email?',
  },
  {
    type: 'input',
    name: 'empId',
    message: 'What is the Employees ID?',
  },
]

const internQuestions = [
  {
    type: 'input',
    name: 'intName',
    message: 'What is the Interns name?',
  },
  {
    type: 'input',
    name: 'intId',
    message: 'What is the Interns ID?',
  },
  {
    type: 'input',
    name: 'intEmail',
    message: 'What is the Interns email?',
  },
  {
    type: 'input',
    name: 'intSchool',
    message: 'What is the Interns school name?',
  },
]

function newMember() {
  inquirer
    .prompt(addMember)
    .then(res => {
      if (res.role === 'Engineer') {
        inquirer
          .prompt(engineerQuestions)
          .then(responses => {
              teamArr.push(new Engineer(responses.engName, responses.engId, responses.engEmail, responses.engGithub));
              newMember();
          })
      }
      if (res.role === 'Employee') {
        inquirer
        .prompt(employeeQuestions)
        .then(responses => {
            teamArr.push(new Employee(responses.empName, responses.empId, responses.empEmail,));
            newMember();
        })
      }
      if (res.role === 'Intern') {
        inquirer
        .prompt(internQuestions)
        .then(responses => {
            teamArr.push(new Intern(responses.intName, responses.intId, responses.intEmail, responses.intSchool));
            newMember();
        })
      }
      if (res.role === 'I dont want to add anymore team members') {
        writeToFile('./dist/index.html', renderHtml(teamArr));
      }
    })
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success!'));
}


function init() {
  inquirer
  .prompt(managerQuestions)
  .then((res) => {
      teamArr.push(new Manager(res.name, res.id, res.email, res.office));
      // console.log(teamArr);
      newMember();
  })
}


init();