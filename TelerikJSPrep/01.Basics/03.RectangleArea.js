const getGets = (arr) => {
    let index = 0;
    
    return () => {
        const toReturn = arr[index];
        index++;
        return toReturn;
    }
}

const test = [
    '100',
    "20",
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const height = Number(gets());
const width = Number(gets());

print(height * width);