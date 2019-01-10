function countWordsInText(array) {
    let words = '';
    let result = {};
    for (const str of array) {
        words = str.split(/\W+/g).filter(a => a !== '');
 //       console.log(words);
        for (const word of words) {
            if (result[word] == undefined) {
                result[word] = 0;
            }
            result[word] ++;
        }
    }

    return JSON.stringify(result);
}


console.log(countWordsInText([`Far too slow, you're far too slow.`, `sdfsdf sdfdff, fff, Far`]));
