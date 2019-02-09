function solve() {
    let productDivs = Array.from(document.querySelectorAll('#exercise>div'));
    let totalPrice = 0.00;
    let totalBasket = [];
    let result = document.querySelector('textarea');

    productDivs.forEach(element => {
        let btn = element.querySelector('button');
        btn.addEventListener('click', (e) => {
            let price = element.querySelectorAll('p')[1];
            let priceRegex = /(\d+\.\d*)/;
            let priceToAppend = priceRegex.exec(price.textContent)[0];
            totalPrice += Number(priceToAppend);

            let product = element.querySelectorAll('p')[0].textContent;
            totalBasket.push(product);

            result.value += `Added ${product} for ${priceToAppend} to the cart.\n`;
        });
    });

    let buyButtonElement = document.querySelector('div#exercise>button');
    buyButtonElement.addEventListener('click', function() {
        let uniqueElementInBasket = Array.from(new Set(totalBasket));
        result.value += `You bought ${uniqueElementInBasket.join(', ')} for ${totalPrice.toFixed(2)}.\n`
    });
}