function solve() {
  let number = Number(document.querySelector('#num').value);
  let arr = JSON.parse(document.querySelector('#arr').value);
  let result = document.querySelector('#result');

  let resultArr = []
  arr.forEach(element => {
    let index = element.indexOf(number);
    let isNumberFound = element.includes(number);

    resultArr.push(`${isNumberFound} -> ${index}`);
  });
  result.textContent = resultArr.join(',');
}