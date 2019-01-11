const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
27,
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const number = Number(gets());

if(number >= 1) {
    print(1);
}

for(let i = 2; i <= number; i++) {
    if(isPrime(i)) {
        let printLine = '';
        for(let j = 1; j <= i; j++) {
            if(j === 1 || isPrime(j)) {
                printLine = printLine + 1;
            } else {
                printLine = printLine + 0;
            }
        }
        print(printLine);
    }
}

function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++)
        if(num % i === 0) return false; 
    return num !== 1 && num !== 0;
}