const inquirer = require('inquirer');
const fs = require('fs');
const {shapesCircle, shapesSquare, shapesTriangle} = require("./lib/shapes.js")

// console.log("Circle:", Circle);
// console.log("Square:", Square);
// console.log("Triangle:", Triangle);

class Shapes {
    constructor(){
        this.text = ''
        this.shape = ''
    }
    render(){
        return `
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                ${this.shape}
                ${this.text}
            </svg>
        `;
    }
    createText(text,color){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</>`
    }
    createShape(shape){
        this.shape = shape;
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
        name: 'initialColor',
        message: 'Please enter your preferred initial color',
     },
     {
        type: 'input',
        name: 'shapeColor',
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
    const shapeFunctions = {
      Circle: shapesCircle,
      Square: shapesSquare,
      Triangle: shapesTriangle,
    };
  
    const selectedShapeFunction = shapeFunctions[data.shape];
  
    if (!selectedShapeFunction) {
      console.error('Invalid shape selected.');
      return '';
    }
  
    const svgShape = selectedShapeFunction(data.shapeColor);
  
    const shape = new Shapes();
    shape.createText(data.initials, data.initialColor);
    shape.createShape(svgShape);
  
    return shape.render();
  }
  
  function writeToFile(svgTemplate) {
    fs.writeFileSync('logo.svg', svgTemplate);
    console.log('Generated logo.svg');
  }
  
  function init() {
    inquirer.prompt(questions).then((data) => {
      const template = generateSVG(data);
      writeToFile(template);
    });
  }
  
  init();