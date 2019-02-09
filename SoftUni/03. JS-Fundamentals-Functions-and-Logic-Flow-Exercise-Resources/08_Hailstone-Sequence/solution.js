function getNext() {
    let number = document.querySelector('#num').value;

    let numbersArr = [];
    numbersArr.push(Number(number));
    while(number !== 1) {
        if(number % 2 === 0) {
            number = number / 2;
        } else {
            number = (3 * number) + 1;
        }

        numbersArr.push(number);
        if(number === 1) {
            break;
        }
    }

    let divResultElement = document.querySelector('#result');
    divResultElement.textContent = numbersArr.join(' ') + ' ';
}