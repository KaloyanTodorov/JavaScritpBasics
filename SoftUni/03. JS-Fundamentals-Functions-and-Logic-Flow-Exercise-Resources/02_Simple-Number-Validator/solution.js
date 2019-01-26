function validate() {
    const weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum = 0;
    let response = document.querySelector('#response');
    document.querySelector('#exercise>fieldset>div>button').addEventListener('click', checkIfSimpleNumber);

    function checkIfSimpleNumber() {
        let inputField = document.querySelector('#exercise>fieldset>div>input').value;
        const lastDigit = inputField[inputField.length - 1];

        for (let i = 0; i < inputField.length - 1; i++) {
            const currentNumber = inputField[i];
            const currentWeight = weights[i];

            sum += currentNumber * currentWeight;
        }

        let remainder = sum % 11;
        if(remainder === 10) {
            remainder = 0;
        }

        appendNumber(Number(lastDigit), remainder);

        function appendNumber(lastDigit, remainder) {
            if(lastDigit === remainder) {
                response.textContent = "This number is Valid!";
            } else {
                response.textContent = "This number is NOT Valid!";
            }
        }
    }
}