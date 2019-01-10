const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
0,
"2",
'6',
`0`,
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const days = Number(gets());
const hours = Number(gets());
const minutes = Number(gets());
const seconds = Number(gets());

const resultsInSeconds = seconds + minutes * 60 + hours * 60 * 60 + days * 24 * 60 * 60;
print(resultsInSeconds);