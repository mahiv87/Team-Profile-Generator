const inquirer = require('inquirer');
const fs = require('fs');
const renderHtml = require('./src/renderHtml');

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
  ])
  .then((responses) => {
    console.log(responses);

    fs.writeFile('./index.html', renderHtml(responses), (err) =>
      err ? console.loc(err) : console.log("Success"));
  });