function composeTag(array) {
    let fileLocation = array[0];
    let alternateText = array[1];

    return `<img src="${fileLocation}" alt="${alternateText}">`
}

console.log(composeTag(['smiley.gif', 'Smiley Face']));