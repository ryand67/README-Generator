var genMD = require("./generateMarkdown.js");
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
        message: "GitHub Username:",
        name: "gitUserName"
    }
    
]).then((answers) => {
    writeToFile("./README.md", answers);
})

const questions = [

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, genMD.generateMarkdown(data), err => {
        if(err) console.log(err);
    })
}

function init() {
    fs.writeFile("./README.md", "", err => {
        if(err) console.log(err);
    });
}

init();
