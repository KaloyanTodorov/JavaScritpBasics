function multiplicationTable(number) {
    console.log('<table border="1">');

    console.log('<tr>');
    console.log('<th>x</th>');
    for (let i = 1; i <= number; i++) {
        console.log(`<th>${i}</th>`);
    }

    console.log('</tr>');

    for (let i = 1; i <= number; i++) {
        console.log('<tr>');
        console.log(`><th>${i}</th>`);
        for (let j = 1; j <= number; j++) {
            console.log(`<td>${i * j}</td>`);
        }

        console.log('</tr>');
    }

    console.log('</table>')
}

document.body.innerHTML(multiplicationTable(5));