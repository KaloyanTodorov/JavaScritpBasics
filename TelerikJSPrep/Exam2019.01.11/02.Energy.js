const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
363
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const arr = (gets() + '').split('');

let odd = 0;
let even = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
        even += Number(arr[i]);
    } else {
        odd += Number(arr[i]);
    }
}

if(even > odd) {
    print(`${even} energy drinks`);
} else if(even < odd) {
    print(`${odd} cups of coffee`)
} else {
    print(`${odd} of both`);
}
