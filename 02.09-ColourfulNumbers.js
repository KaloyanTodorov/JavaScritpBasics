function printColorfulNumbers(number) {
    console.log("<ul>");
        console.log("")
        for (let i = 1; i <= number; i++) {
            console.log(`<li><span style='color:${i % 2 == 0 ? "blue" : "green"}'>${i}</span></li>`)
        }

    console.log("</ul>");
}

console.log(printColorfulNumbers(10));