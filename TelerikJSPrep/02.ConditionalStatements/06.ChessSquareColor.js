const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
"f",
"3"
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const line = gets().toLowerCase();;
const rank = Number(gets());

switch(line) {
    case "a":
    case "c":
    case "e":
    case "g":
        if(rank % 2 === 0) {
            print('light');
        } else {
            print('dark');
        }
        break;
    case "b":
    case "d":
    case "f":
    case "h":
        if(rank % 2 === 0) {
            print("dark");
        } else {
            print("light");
        }
        break;
    default:
        break;
}