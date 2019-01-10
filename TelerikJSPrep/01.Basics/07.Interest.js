const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
"1000",
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const initialSum = Number(gets());
let sumWithInterest = initialSum;
for(let i = 0; i < 3; i++) {
    sumWithInterest += sumWithInterest * 0.05;
    print(sumWithInterest.toFixed(2));
}