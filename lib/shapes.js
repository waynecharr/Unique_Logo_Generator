
class Circle {
    constructor(text, textColor, shapeColor){
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>`;
 }
};

// class Square {
//     return `<svg version="1.1"
//     width="300" height="200"
//     xmlns="http://www.w3.org/2000/svg">

//     <rect width="100%" height="100%" fill="red" />

//     <circle cx="150" cy="100" r="80" fill="green" />

//  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>`;`;
// };

// class Triangle {
//     return <svg version="1.1"
//     width="300" height="200"
//     xmlns="http://www.w3.org/2000/svg">

//     <rect width="100%" height="100%" fill="red" />

//     <circle cx="150" cy="100" r="80" fill="green" />

//  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>`;;
// };

module.exports = { Circle };