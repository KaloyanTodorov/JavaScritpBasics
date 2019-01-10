const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index++;
        return toReturn;
    }
}

const test = [
    "10",
    10
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const halfLitterBottles = Number(gets());
const oneLitterBottles = Number(gets());

const finalSum = halfLitterBottles * 0.10 + oneLitterBottles * 0.25;
print(finalSum.toFixed(2));