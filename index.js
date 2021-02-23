const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateHTML = require("./src/generateHTML");
const Employee = require("./classes/Employee");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const Manager = require("./classes/Manager");

const ouputDir = path.resolve(__dirname, "output");
const outputPath = path.join(ouputDir, "page.html");

const team = [];
const id = [];

function init() {
  function generateManager() {
    console.log("Let's build your team!");
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your manager's id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's Email address?",
        validate: (answer) => {
          if (answer.indexOf("@") === -1) {
            return "Please enter a valid email";
          } else {
            return true;
          }
        },
      },
    ]);
  }
}

/*
ReadMe References:
https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation
https://www.npmjs.com/package//inquirer

*/
