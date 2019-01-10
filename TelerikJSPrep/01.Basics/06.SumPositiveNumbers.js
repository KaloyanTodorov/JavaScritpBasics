const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
"4",
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const number = Number(gets());
const result = (number * (number + 1)) / 2;
print(result);