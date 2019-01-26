function leapYear() {
    let input = document.querySelector('#exercise>input');
    let checkButton = document.querySelector('#exercise>button');
    
    checkButton.addEventListener('click', checkYear);
    
    function checkYear() {
        let outputText = '';
        if(Number(input.value) % 4 === 0) {
            outputText = "Leap Year";
        } else {
            outputText = "Not Leap Year";
        }
        let yearDivElement = document.querySelector('#year');
        let h2Element = yearDivElement.querySelector('h2');
        let divElement = yearDivElement.querySelector('div')

        h2Element.textContent = outputText;
        divElement.textContent = input.value;
        input.value = '';
    }
}