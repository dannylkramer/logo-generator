class Shape {
    constructor(color) {
      this.color = color;
    }
  
    // Method to be implemented by child classes
    draw() {
      throw new Error('draw() method must be implemented');
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    draw() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    draw() {
      return `<polygon points="150,20 220,180 80,180" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    draw() {
      return `<rect x="50" y="20" width="200" height="150" fill="${this.color}" />`;
    }
  }
  
module.exports = { Circle, Triangle, Square };
  