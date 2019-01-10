const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index++;
        return toReturn;
    }
}

const test = [
    '10.2',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const price = Number(gets());
const priceWithTip = price + price * 0.10;
print(priceWithTip);