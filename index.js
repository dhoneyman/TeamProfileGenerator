const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const questions = inquirer
  .prompt([
    {
      type: "list",
      message: "Please select employee position.",
      options: ["Engineer", "Intern", "Manager"],
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
  ])
  .then((data) => {
    writeToFile(data);
  });

function writeToFile(data) {
  fs.writeFile("employees.html", generateHTML(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}
