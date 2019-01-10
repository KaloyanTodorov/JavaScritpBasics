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

function printObj() {
    let obj = {c: 3, b: 1, d: 2, a: 0, testest: 'asdd', 4: 0}
    let prices = {a: {price: 2.05}, c: {price: 3.99}, b: {price: 1.89}};
    let pricesKeys = Object.keys(prices).sort((a, b) => {
        return prices[b].price - prices[a].price;
    } );

    console.log(pricesKeys);

    // let keys = Object.keys(obj).sort();
    // console.log(keys);

//    console.log(obj.sort());
}

printObj();

//
// printName('test');
// printName('fist', 'last');
// printName();