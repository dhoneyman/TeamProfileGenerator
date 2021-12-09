const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const employees = [];

generateEmployees();

function generateEmployees() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select employee position.",
        choices: ["Engineer", "Intern", "Manager"],
        name: "position",
      },
      {
        type: "input",
        message: "Please enter employees name.",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter employees id number.",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter employees email address.",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter employees GitHub URL.",
        name: "github",
        when: (data) => data.position === "Engineer",
      },
      {
        type: "input",
        message: "Please enter employees office number",
        name: "officeNumber",
        when: (data) => data.position === "Manager",
      },
      {
        type: "input",
        message: "Please enter school attended by intern",
        name: "school",
        when: (data) => data.position === "Intern",
      },
      {
        type: "confirm",
        message: "Would you like to enter another employee?",
        default: false,
        name: "addEmployee",
      },
    ])
    .then((data) => {
      let newEmployee;
      if (data.position === "Engineer") {
        newEmployee = new Engineer(data.name, data.email, data.id, data.github);
      }
      if (data.position === "Intern") {
        newEmployee = new Intern(data.name, data.email, data.id, data.school);
      }
      if (data.position === "Manager") {
        newEmployee = new Manager(
          data.name,
          data.email,
          data.id,
          data.officeNumber
        );
      }

      employees.push(newEmployee);
      

      if (data.addEmployee === true) {
        generateEmployees();
      } else {
        writeToFile(employees);
      }

      console.log(employees);
    });
}
function writeToFile(employees) {
  fs.writeFile("employees.html", generateHTML(employees), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}
