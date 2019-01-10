const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
    "2",
    '2',
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const firstNum = Number(gets());
const secondNum = Number(gets());

print(firstNum + secondNum);
print(firstNum - secondNum);
print(firstNum * secondNum);
print(firstNum % secondNum);
print(Math.pow(firstNum, secondNum));