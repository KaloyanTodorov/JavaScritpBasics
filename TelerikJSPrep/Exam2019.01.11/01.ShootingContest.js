const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
"4",'5',1,3,5
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const targets = Number(gets());
const speedGeorge = Number(gets());
const latencyGeorge = Number(gets());
const speedPeter = Number(gets());
const latencyPeter = Number(gets());

const resultGeorge = targets * speedGeorge + 2 * latencyGeorge;
const resultPeter = targets * speedPeter + 2 * latencyPeter;

if(resultGeorge < resultPeter) {
    print("George");
} else if(resultGeorge > resultPeter) {
    print("Peter");
} else {
    print("Draw");
}