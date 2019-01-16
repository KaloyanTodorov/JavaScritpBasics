const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index++;
return toReturn;
}
}
    
const test = [
    "7",
"gosho",
"Pesho",
"staMAT",
"apostol",
"spiridon",
"PAUN",
"StrAHiL",
]
    
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const numberOfWords = Number(gets());
let wordsAsArr = {};

for(let i = 0; i < numberOfWords; i++) {
    let word = gets();
    let currentWordAsArr = (word.toLowerCase()).split('');
    let sum = 0;
    currentWordAsArr.forEach(a => sum += (a.charCodeAt() - 96));
    wordsAsArr[word] = sum;
}

let heaviestWord = 0;
let result = "";
for (const key in wordsAsArr) {
    value = wordsAsArr[key];
    if(heaviestWord < value) {
        result = value + " " + key;
        heaviestWord = value;
    }
}

print(result);