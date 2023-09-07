
class Circle {
    constructor(text, textColor, shapeColor){
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>

    <text x="152" y="116" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>`;
 }
};

class Square {
    constructor(text, textColor, shapeColor){
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    render() {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

    <rect width="75%" height="75%" fill="${this.shapeColor}"/>

    <text x="118" y="140" font-size="92" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>`;
 }
};

class Triangle {
    constructor(text, textColor, shapeColor){
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>

    <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>`;
 }
};

module.exports = { Circle, Square, Triangle };