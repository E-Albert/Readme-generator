// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./questions'); 

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(title, overview, description, installation, usage, license, contributing, tests, github, email) {
  //makes it into a bg string
  const readMeContent = generateMarkdown(title, overview, description, installation, usage, license, contributing, tests, github, email);
//the string is turned into data so that it can be written by the file
  fs.writeFile('README.md', readMeContent, (err) => {
    err ? console.log(err) : console.log('YESSSIIIIRRR!!!!');
  })
};


  //check mini project


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(({ title, overview, description, installation, usage, license, contributing, tests, github, email }) => {
    console.log(title, overview, description, installation, usage, license, contributing, tests, github, email);
    writeToFile(title, overview, description, installation, usage, license, contributing, tests, github, email);
  });
}
  //check mini project
// }
// fs.writeFileSync(path.join(process.cwd()));
// Function call to initialize app
init();
