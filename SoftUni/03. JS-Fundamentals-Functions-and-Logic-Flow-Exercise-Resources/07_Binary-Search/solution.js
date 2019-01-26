function binarySearch() {
    let integerArrayElement = document.querySelector('#arr');
    let numberToCheckElement = document.querySelector('#num');

    let arr = JSON.parse(integerArrayElement.value);
    let result = document.querySelector('#result');

    if(arr.includes(Number(numberToCheckElement.value))) {
        result.textContent = `Found ${numberToCheckElement.value} at index ${arr.indexOf(Number(numberToCheckElement.value))}`;
    } else {
        result.textContent = `${numberToCheckElement.value} is not in the array.`
    }

    integerArrayElement.value = '';
    numberToCheckElement.value = '';
}