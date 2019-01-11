const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
1,
4,
3
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const first = Number(gets());
const second = Number(gets());
const third = Number(gets());

if(first <= second) {
    if(first <= third) {
        if(second <= third) {
            print(`${third} ${second} ${first}`);
        } else {
            print(`${second} ${third} ${first}`);
        }
    } else {
        print(`${second} ${first} ${third}`);
    }
} else {
    if(first <= third) {
        print(`${third} ${first} ${second}`);
    } else {
        if (second <= third) {
            print(`${first} ${third} ${second}`);
        } else {
            print(`${first} ${second} ${third}`);
        }
    }
}