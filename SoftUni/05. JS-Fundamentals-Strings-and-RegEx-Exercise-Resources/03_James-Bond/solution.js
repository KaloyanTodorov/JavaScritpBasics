function solve() {
  const array = JSON.parse(document.querySelector('input#arr').value);
  const keyword = array.shift();
  let output = document.querySelector('span#result');
  let p = document.createElement('p');
  
  let elementToAppend = '';
  const regex = new RegExp(`(^${keyword}| ${keyword}) +([A-Z!%$#]{8,})([ .,]|$)`, 'gi');
  array.forEach(element => {
    let currentMatch;
    while((currentMatch = regex.exec(element)) !== null) {
      let lowercaseRegex = /[a-z]/g;
      if(lowercaseRegex.test(currentMatch[2])) {
        continue;
      }
      let newElement1 = currentMatch[2].replace(/!/g, '1');
      let newElement2 = newElement1.replace(/%/g, '2');
      let newElement3 = newElement2.replace(/#/g, '3');
      let newElement4 = newElement3.replace(/\$/g, '4');
      let elementToAppend = element.replace(currentMatch[2], newElement4.toLowerCase());
      element = elementToAppend;
    }

    let p = document.createElement('p');
    p.textContent = element;
    output.appendChild(p);
  });
  
}



// ["enCode", "Some messages are just not encoded what can you do?", "RE - ENCODE THEMNOW! - he said.", "Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%."]

// ["specialKey", "In this text the specialKey HELLOWORLD! is correct, but the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while SpeCIaLkeY SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!"]