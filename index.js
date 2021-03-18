// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your Github username?",
    name: "userName",
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'eMail',
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message:
      "What type of dependencies install before working with this app?",
    name: "installation",
    default: 'npm i',
  },
  {
    type: "input",
    message: "Tell me about the project",
    name: "description",
  },
  {
    type: "list",
    message: "Any license?",
    name: "license",
    choices: ["IBM", "MIT", "WTFPL", "none"],
  },
  {
    type: "input",
    message: "What is you app going to be used for?",
    name: "usage",
  },
  {
    type: "input",
    message: "Any contribution guidelines anyone needs to follow?",
    name: "contribution",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), () => {});
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("./output/README.md", data);
  });
}

// Function call to initialize app
init();
