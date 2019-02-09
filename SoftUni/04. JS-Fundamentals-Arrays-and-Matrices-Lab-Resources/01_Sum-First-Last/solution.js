function solve() {
  let inputArr = JSON.parse(document.querySelector('#arr').value).map(Number);
  let result = document.querySelector('#result');
  inputArr.forEach((element, index) => {
      let p = document.createElement('p');
      p.textContent = `${index} -> ${element * inputArr.length}`
      result.appendChild(p);
  });
}