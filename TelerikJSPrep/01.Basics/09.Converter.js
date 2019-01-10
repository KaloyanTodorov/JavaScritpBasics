const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
"70",
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const miles = Number(gets());
const gallon = 4.54;
const oneMile = 1.6;
const result = (100 / (miles * oneMile)) * gallon;
const resultRounded = Math.floor(result);
print(`${resultRounded} litres per 100 km`);