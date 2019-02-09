function countLetters(str, letter) {
    let sum = 0;
    for (let currentLetter of str) {
        if (letter == currentLetter) {
            sum++;
        }
    }

    console.log(sum);
}

countLetters("asdasdsdasdasd", "s")