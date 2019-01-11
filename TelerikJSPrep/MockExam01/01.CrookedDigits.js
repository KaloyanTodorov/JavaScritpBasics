const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
    "-44444444444444444444444444444444444444444444545454545.09",
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const initialNumber = "" + gets();
const numberAsStr = initialNumber.replace(/\.|\-/g, '');
let arr = numberAsStr.split('');
let sum = 0;

if(arr.length > 1) {
    while(arr.length > 1) {
        const something = arr.reduce((a, b) => Number(a) + Number(b), 0);
        arr = (something + '').split('');
        if(arr.length === 1) {
            sum = arr[0];
        }
    }
} else {
    sum = arr[0];
}

print(sum);