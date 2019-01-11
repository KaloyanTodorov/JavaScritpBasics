const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
-0.5,
-0,
-0.1
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const first = Number(gets());
const second = Number(gets());
const third = Number(gets());

print(Math.max(first, second, third));