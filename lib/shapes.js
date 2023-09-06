const Circle = (color) => {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`;
};

const Square = (color) => {
    return `<rect x="50" y="50" height="200" width="200" fill="${color}"/>`;
};

const Triangle = (color) => {
    return `<polygon points="100,0 300,200 0,200" fill="${data.shape - color}"/>`;
};

module.exports = { Circle, Square, Triangle };