function extractUniqueWords(array) {
    let result = new Set();

    for (const line of array) {
        let words = line.toLowerCase().split(/\W+/g).filter(a => a !== '');
        for (const word of words) {
            result.add(word);
        }
    }

    return Array.from(result).join(', ');
}

console.log(extractUniqueWords(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui. ",
"Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. ",
"Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. ",
"Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. ",
"Morbi in ipsum varius, pharetra diam vel, mattis arcu! ",
"Integer ac turpis commodo, varius nulla sed, elementum lectus. ",
"Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus!"]));