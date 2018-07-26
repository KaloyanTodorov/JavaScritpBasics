class Rectangle {
    constructor (width, height) {
        this._width = width;
        this._height = height;
    }

    set width (width) { this._width = width;}
    get width() {return this._width; }

    set height(height) {this._height = height; }
    get height() {return this._height; }

    get area() {
        return this._width * this._height;
    }
}

let rect = new Rectangle(50, 100);

console.log(rect.area);

console.log(rect.width);


function printName(firstName, lastName) {
    console.log('do stuff' + ' more stuff');
}

function printName(firstName = 'daj ime') {
    console.log(firstName);
}


printName('test');
printName('fist', 'last');
printName();