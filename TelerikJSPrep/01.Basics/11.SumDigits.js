const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
"2346",
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const number = gets();
let sumOfdigits = 0;
for (let index = 0; index < number.length; index++) {
    const element = Number(number[index]);
    sumOfdigits += element;
}

print(sumOfdigits);