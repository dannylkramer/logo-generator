// shapes.test.js

const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('should create circle SVG', () => {
    const circle = new Circle('#FF0000');
    expect(circle.draw()).toBe('<circle cx="150" cy="100" r="80" fill="#FF0000" />');
  });
});

describe('Triangle', () => {
  test('should create triangle SVG', () => {
    const triangle = new Triangle('#FF0000');
    expect(triangle.draw()).toBe('<polygon points="150,20 220,180 80,180" fill="#FF0000" />');
  });
});

describe('Square', () => {
  test('should create square SVG', () => {
    const square = new Square('#FF0000');
    expect(square.draw()).toBe('<rect x="50" y="20" width="200" height="150" fill="#FF0000" />');
  });
});
