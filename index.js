const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require("./lib/shapes.js")

// console.log("Circle:", Circle);
// console.log("Square:", Square);
// console.log("Triangle:", Triangle);

const questions = [
    {
        type: 'input',
        name: 'initials',
        message: 'Please enter three initials:',
     },
     {
        type: 'input',
        name: 'initialColor',
        message: 'Please enter your preferred initial color (or hexidecimal code):',
     },
     {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter your preferred shape color (or hexidecimal code):',
     },
    {
        type: 'list',
        message: 'Please select your preferred shape:',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
      },
]

function generateSVG(data) {
    let svgShape;
    if (data.shape === 'Circle') {
        svgShape = new Circle(data.initials, data.initialColor, data.shapeColor);
    } else if (data.shape === 'Square') {
        svgShape = new Square(data.initials, data.initialColor, data.shapeColor);
    } else if (data.shape === 'Triangle') {
        svgShape = new Triangle(data.initials, data.initialColor, data.shapeColor);
    } else {
        console.log('Invalid shape selection');
        return;
    }

    const svg = svgShape.render();
    writeToFile(svg);
}

function writeToFile(svgTemplate) {
    fs.writeFileSync('logo.svg', svgTemplate);
    console.log('Generated logo.svg');
}

function init() {
    inquirer.prompt(questions).then((data) => {
        generateSVG(data);
    });
}

init();
  