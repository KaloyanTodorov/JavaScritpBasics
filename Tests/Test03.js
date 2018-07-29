function wordsToUppercase(str) {
    return str.toUpperCase().split(/\W+/).filter(w => w != '').join(', ');
}

console.log(wordsToUppercase('asd,asdasdsd.asdas0ddd, false,,,,  asdasd.. sddf_34'));