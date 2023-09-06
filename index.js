const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG =require("./lib/shapes.js")

const questions = [
    {
        type: 'input',
        name: 'initials',
        message: 'Please enter three initials.',
     },
     {
        type: 'input',
        name: 'initial-color',
        message: 'Please enter your preferred initial color',
     },
     {
        type: 'input',
        name: 'color',
        message: 'Please enter your preferred shape color.',
     },
    {
        type: 'list',
        message: 'What is your preferred Shape?',
        name: 'Shape',
        choices: ['Circle', 'Square', 'Triangle'],
      },
]

function writeToFile(data) {
    fs.writeFile("./utils/logo.svg", data, (err) =>
    err ? console.log(err) : console.log('Success!')
)}

function init() {
    inquirer.prompt(questions)
    // .then(function(data))
    .then((data) => {
        // console.log(data);
        const template = generateSVG(data)
        console.log(template);
        writeToFile(template)

    }) 
}

init();