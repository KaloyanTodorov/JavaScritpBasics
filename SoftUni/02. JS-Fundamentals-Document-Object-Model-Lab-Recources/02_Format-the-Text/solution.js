function solve(){
  let input = document.getElementById('input');
  const inputArray = input.textContent.split('.');

  let counter = 0;
  let p;
  let output = document.getElementById('output');
  for (let i = 0; i < inputArray.length; i++) {
    if(counter === 0) {
      p = document.createElement('p');
    }
    counter++;
    let sentence = inputArray[i];
    if(i < inputArray.length - 1) {
      sentence += '. ';
    }
    p.textContent += sentence;
    if(counter === 3) {
      counter = 0;
      output.appendChild(p);
    } else if(i === inputArray.length - 1) {
      output.appendChild(p);
    }
  }
}