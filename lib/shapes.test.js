const { Circle } = require('./shapes.js');

describe ('Circle', () => {
    it('it should render a circle', () => {
        const svgShape = new Circle("WAC", "BLUE", "WHITE");
        const templateString = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="WHITE"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="BLUE">WAC</text>

    </svg>`
        expect(svgShape.render()).toEqual(templateString);
    })
}
)