function solve() {
   let number = Number(document.querySelector('#num').value);

   let numbersArr = [];

   for (let i = 1; i <= number; i++) {
      if(number % i === 0) {
         numbersArr.push(i);
      }
   }
   
   let resultElement = document.querySelector('#result');
   resultElement.textContent = numbersArr.join(' ');
}