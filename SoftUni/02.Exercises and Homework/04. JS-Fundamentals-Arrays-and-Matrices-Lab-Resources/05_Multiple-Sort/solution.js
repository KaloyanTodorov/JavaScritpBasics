function solve() {
  let arr = JSON.parse(document.querySelector('#arr').value);
  let result = document.querySelector('#result');

  let secondDiv = document.createElement('div');
  secondDiv.textContent = arr.sort(((a, b) => Number(a) - Number(b))).join(', ');
  result.appendChild(secondDiv);

  let firstDiv = document.createElement('div');
  firstDiv.textContent = arr.sort().join(', ');
  result.appendChild(firstDiv);

}