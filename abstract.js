// Abstract method example
class Shape {
    // Abstract method
    calculateArea() {
        throw new Error("Must implement method: calculateArea");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.calculateArea()); 
