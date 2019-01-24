function solve() {
    let decimalNumber = document.getElementById('input');
    let menuElement = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';

    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.textContent = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';

    menuElement.appendChild(binaryOption);
    menuElement.appendChild(hexadecimalOption);

    const convertValues = {
        binary: 2,
        decimal: 10,
        hexadecimal: 16,
    }

    const convertButton = document.querySelector('button'); 

    convertButton.addEventListener('click', function(e) {
        if(decimalNumber.value !== '') {
            const selectedOption = menuElement.options[menuElement.selectedIndex].value;
            const convertedNumber = (decimalNumber.value >>> 0).toString(convertValues[selectedOption]).toUpperCase();
            
            decimalNumber.value = '';
            document.getElementById('result').value = convertedNumber;
        }
    })
}