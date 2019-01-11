const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
158,
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let [a, b, c] = ("" + gets()).split('');
a = Number(a);
b = Number(b);
c = Number(c);

print(Math.max(
    a + b + c,
    a + b * c,
    a * b + c,
    a * b * c,
))