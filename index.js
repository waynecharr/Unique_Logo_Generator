const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes.js")

// console.log("Circle:", Circle);
// console.log("Square:", Square);
// console.log("Triangle:", Triangle);

class Shapes {
    constructor(){
        this.text = ''
        this.shape = ''
    }
    render(){
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">`
    }
    createText(text,color){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</>`
    }
    createShape(shape){
        this.shape = shape.render()
    }
}

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
        name: 'shape-color',
        message: 'Please enter your preferred shape color.',
     },
    {
        type: 'list',
        message: 'What is your preferred Shape?',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
      },
]

function generateSVG(data) {
    const shapeObj = {
      Circle,
      Square,
      Triangle,
    };
  
    const selectedShape = shapeObj[data.shape];
  
    const shape = new Shapes();
    shape.createText(data.initials, data.initialColor);
    shape.createShape(selectedShape);
  
    return shape.render();
  }
  
  function writeToFile(svgTemplate) {
    fs.writeFileSync('logo.svg', svgTemplate);
    console.log('logo.svg created successfully!');
  }

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