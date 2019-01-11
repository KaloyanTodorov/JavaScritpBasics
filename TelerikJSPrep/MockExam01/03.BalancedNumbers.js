const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
275,
693,
110,
742
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let line = gets() + "";
let sum = 0;

while(Number(line[1]) === Number(line[0]) + Number(line[2])) {
    sum += Number(line);
    line = gets() + "";
}

print(sum);