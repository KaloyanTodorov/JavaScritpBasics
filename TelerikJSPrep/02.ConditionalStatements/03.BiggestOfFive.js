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
-4,
-3,
-10,
-0.3,
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const first = Number(gets());
const second = Number(gets());
const third = Number(gets());
const fourth = Number(gets());
const fifth = Number(gets());

let highestNumber = first;

if(second >= highestNumber) {
    highestNumber = second;
}

if(third >= highestNumber) {
    highestNumber = third;
}

if(fourth >= highestNumber) {
    highestNumber = fourth;
}

if(fifth >= highestNumber) {
    highestNumber = fifth;
}
print(highestNumber);