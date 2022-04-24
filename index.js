const inquirer = require('inquirer');
const fs = require('fs');
const renderHtml = require('./src/renderHtml');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArr = [];

const questions = [
  {
    type: 'input',
    message: 'What is the Managers name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the Managers email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is the Managers ID?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is the Office number?',
    name: 'office',
  },
]

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success!'));
}


function init() {
  inquirer
  .prompt(questions)
  .then((responses) => {
      writeToFile('./dist/index.html', renderHtml(responses))
  })
}


init();