class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    area = () => this.length * this.width;
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length)
    }
}

const square1 = new Square(5)
const rect1 = new Rectangle(5, 6);
console.log('Rect1 area = ', rect1.area());
console.log('Square1 area = ', square1.area());