function solve() {
  let input = JSON.parse(document.querySelector('#arr').value);
  let result = document.querySelector('#result');
  let finalArr = [];
  input.forEach((element, index) => {
    if(index % 2 === 0) {
      finalArr.push(element);
    }
  });

  result.textContent = finalArr.join(' x ');
}