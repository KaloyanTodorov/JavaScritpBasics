function solve() {
  let arr = JSON.parse(document.querySelector('#arr').value);
  let result = document.querySelector('#result');
  let resultArr = [];
  arr.forEach(element => {
    let reversed = [];
    for (let i = 0; i < element.length; i++) {
      if(i === 0) {
        reversed[0] = (element[element.length - 1]).toUpperCase();
        continue;
      } 
      reversed[i] = element[element.length - 1 - i];
    }
    resultArr.push(reversed.join(''));
  });
  result.textContent = resultArr.join(' ');
}