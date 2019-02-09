function solve() {
  let incomingString = document.querySelector('#str').value;
  let result = document.querySelector('#result');

  let onesCount = incomingString.match(/1/g).length;

  let digitsToCut = reduceNumberTo1Digit(onesCount);

  let stringToCheck = incomingString.slice(digitsToCut, -digitsToCut);

  let stringAsBinaryArr = stringToCheck.match(/.{1,8}/g);

  let tempString = '';
  
  stringAsBinaryArr.forEach(element => {
    
    tempString += String.fromCharCode(parseInt(element, 2));
    
  });

  let returnString = tempString.match(/[A-Za-z ]+/g).join('');

  result.textContent = returnString;

  function reduceNumberTo1Digit(number) {
    number += '';
    let updatedNumber = number.split('').map(Number).reduce((a, b) => a + b);
    if(updatedNumber > 9) {
      return reduceNumberTo1Digit(updatedNumber);
    }

    return updatedNumber;
  }
}