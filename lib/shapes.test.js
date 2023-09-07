const { Circle, Square, Triangle } = require('./shapes.js');

describe ('Circle', () => {
    it('it should render a circle', () => {
        const svgShape = new Circle("WAC", "BLUE", "WHITE");
        const templateString = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="WHITE"/>

    <text x="152" y="116" font-size="60" text-anchor="middle" fill="BLUE">WAC</text>

    </svg>`
        expect(svgShape.render()).toEqual(templateString);
    })
}
);

describe ('Square', () => {
    it('it should render a square', () => {
        const svgShape = new Square("WAC", "BLUE", "WHITE");
        const templateString = 
    `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

    <rect width="75%" height="75%" fill="WHITE"/>

    <text x="118" y="140" font-size="92" text-anchor="middle" fill="BLUE">WAC</text>

    </svg>`
        expect(svgShape.render()).toEqual(templateString);
    })
}
)

describe ('Triangle', () => {
    it('it should render a triangle', () => {
        const svgShape = new Triangle("WAC", "BLUE", "WHITE");
        const templateString = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="WHITE"/>

    <text x="150" y="160" font-size="60" text-anchor="middle" fill="BLUE">WAC</text>

    </svg>`
        expect(svgShape.render()).toEqual(templateString);
    })
}
);