// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path');
const generateMarkdown = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'what is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'what does the user have to  install before working with this app?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'tell me about the project',
        name: 'description',
    },
    {
        type: 'list',
        message: 'any license?',
        name: 'license',
        choices: ["IBM","MIT","none"],
    },
    {
        type: 'input',
        message: 'what is you app going to be used for?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'any contribution guidelines anyone needs to follow?',
        name: 'contribution',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync('readme.md', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
