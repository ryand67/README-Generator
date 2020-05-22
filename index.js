var genMD = require("./generateMarkdown");
var fs = require("fs");
var inquirer = require("inquirer");

inquirer.prompt([{
        type: "input",
        message: "Title:",
        name: "title"
    },
    {
        type: "input",
        message: "Description:",
        name: "description"
    },
    {
        type: "input",
        message: "Title of Contents",
        name: "tableOfContents"
    },
    {
        type: "input",
        message: "Installation:",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage:",
        name: "usage"
    },
    {
        type: "input",
        message: "Lisence:",
        name: "lisence"
    },
    {
        type: "input",
        message: "Contributers:",
        name: "contributers"
    },
    {
        type: "input",
        message: "Tests:",
        name: "tests"
    },
    {
        type: "input",
        message: "GitHub Email:",
        name: "gitEmail"
    }
    
]).then((answers) => {
    console.log(answers);
})

const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
