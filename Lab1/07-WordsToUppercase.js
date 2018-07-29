function printUppercaseWords(str) {
    return str.toUpperCase().split(/\W+/).filter(w => w !== '').join(', ');
}

console.log(printUppercaseWords('Hi, how are you?'));
console.log(printUppercaseWords('hello'));
console.log(printUppercaseWords('Hi, how , , ,  are you?   '));
