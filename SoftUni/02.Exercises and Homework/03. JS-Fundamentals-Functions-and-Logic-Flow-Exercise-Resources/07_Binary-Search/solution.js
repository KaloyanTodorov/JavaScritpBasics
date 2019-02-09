function binarySearch() {
    let integerArrayElement = document.querySelector('#arr');
    let numberToCheckElement = document.querySelector('#num');

    let arr = integerArrayElement.value.split(', ');
    let result = document.querySelector('#result');

    if(arr.includes(numberToCheckElement.value)) {
        result.textContent = `Found ${numberToCheckElement.value} at index ${arr.indexOf(numberToCheckElement.value)}`;
    } else {
        result.textContent = `${numberToCheckElement.value} is not in the array`
    }

    integerArrayElement.value = '';
    numberToCheckElement.value = '';
}