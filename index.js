const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateHTML = require("./src/generateHTML");
const Employee = require("./classes/Employee");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const Manager = require("./classes/Manager");

const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "page.html");

const team = [];
const id = [];

function init() {
  function generateManager() {
    console.log("Let's build your team!");
    inquirer
      .prompt([
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
        {
          type: "input",
          name: "officeNumber",
          message: "What is your Manager's office number?",
        },
      ])
      .then((data) => {
        let newManager = new Manager(
          data.managerName,
          data.managerId,
          data.managerEmail,
          data.officeNumber
        );
        team.push(newManager);
        id.push(data.managerId);
        newTeamMember();
      });
  }
  generateManager();
}

function newTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "What employee role would you like next?",
        choices: ["Engineer", "Intern", "My team is complete"],
      },
    ])
    .then((choice) => {
      switch (choice.employeeType) {
        case "Engineer":
          newEngineer();
          break;
        case "Intern":
          newIntern();
          break;
        default:
          finishTeam();
      }
    });
}

function newEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your Engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your Engineer's id?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your Engineer's email address?",
        validate: (answer) => {
          if (answer.indexOf("@") === -1) {
            return "Please enter a valid email";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "GitHub",
        message: "What is your Engineer's GitHub username?",
      },
    ])
    .then((data) => {
      let newEngineer = new Engineer(
        data.engineerName,
        data.engineerId,
        data.engineerEmail,
        data.GitHub
      );
      team.push(newEngineer);
      id.push(data.engineerId);
      console.log(newEngineer);
      console.log("Team Array:");
      console.log(team);
      console.log("idArray:");
      console.log(id);
      newTeamMember();
    });
}

function newIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your Intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is your Intern's id?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email address?",
        validate: (answer) => {
          if (answer.indexOf("@") === -1) {
            return "Please enter a valid email";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is your Intern's school name?",
      },
    ])
    .then((data) => {
      let newIntern = new Intern(
        data.internName,
        data.internId,
        data.internEmail,
        data.school
      );
      team.push(newIntern);
      id.push(data.internId);
      console.log(newEngineer);
      console.log("Team Array:");
      console.log(team);
      console.log("idArray:");
      console.log(id);
      newTeamMember();
    });
}

function finishTeam() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  fs.writeFileSync(outputPath, generateHTML(team), "utf-8");
}

init();

/*
ReadMe References:
https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation
https://www.npmjs.com/package//inquirer
https://stackoverflow.com/questions/41252314/how-can-i-correctly-check-if-a-string-does-not-contain-a-specific-word

*/
