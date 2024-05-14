// index.js

const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text: ',
      validate: function (input) {
        return input.length <= 3 ? true : 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal number): ',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal number): ',
    },
  ])
  .then((userInput) => {
    let shape;
    switch (userInput.shape) {
      case 'Circle':
        shape = new Circle(userInput.shapeColor);
        break;
      case 'Triangle':
        shape = new Triangle(userInput.shapeColor);
        break;
      case 'Square':
        shape = new Square(userInput.shapeColor);
        break;
    }

    const svgContent = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" style="background-color: #f0f0f0;">
  ${shape.draw()}
  <text x="150" y="100" fill="${userInput.textColor}" text-anchor="middle" font-family="Arial" font-size="48" alignment-baseline="middle" dominant-baseline="middle">${userInput.text}</text>
</svg>`;

    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });
