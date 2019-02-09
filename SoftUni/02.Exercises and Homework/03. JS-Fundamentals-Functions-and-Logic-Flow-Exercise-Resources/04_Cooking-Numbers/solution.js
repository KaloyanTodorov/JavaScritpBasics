function solve() {
    let number = document.querySelector('#exercise>input');
    const buttons = document.querySelectorAll('button');
    let currentNumber;
    let outputElement = document.querySelector('#output');

    const buttonsNames = {
        Chop: chop,
        Dice: dice,
        Spice: spice,
        Bake: bake,
        Fillet: fillet,
    }

    Array.from(buttons).forEach(btn => btn.addEventListener('click', buttonsNames[btn.textContent]));

    function chop() {
        currentNumber = updateNumber() / 2;
        outputElement.textContent = currentNumber;
    }

    function dice() {
        currentNumber = Math.sqrt(updateNumber());
        outputElement.textContent = currentNumber;
    }

    function spice() {
        currentNumber = updateNumber() + 1;
        outputElement.textContent = currentNumber;
    }

    function bake() {
        currentNumber = updateNumber() * 3;
        outputElement.textContent = currentNumber;
    }

    function fillet() {
        currentNumber = updateNumber() * 0.8;
        outputElement.textContent = currentNumber;
    }

    function updateNumber() {
        return Number(currentNumber) || Number(number.value);
    }
}
