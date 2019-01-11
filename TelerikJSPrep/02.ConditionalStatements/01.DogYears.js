const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
"7",
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const humanYears = Number(gets());

if(humanYears <= 2) {
    print(humanYears * 10);
} else {
    print(2 * 10 + (humanYears - 2) * 4);
}