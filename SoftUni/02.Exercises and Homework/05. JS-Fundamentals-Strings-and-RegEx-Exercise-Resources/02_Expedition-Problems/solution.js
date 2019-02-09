function solve() {
  // window.onbeforeunload = () => {
  //   return "are you sure???";
  // };
  let keyword = document.querySelector('#str').value;
  let text = document.querySelector('#text').value;

  let currentMatch;
  const coordsRegex = /(east|north).*?(\d{2})[^,]*?\,[^,]*?(\d{6})/gmi;
  let coords = {
    N: '',
    E: '',
  }

  while ((currentMatch = coordsRegex.exec(text)) !== null) {
    const currentDirection =  currentMatch[1].toUpperCase().slice(0,1);
    coords[currentDirection] = `${currentMatch[2]}.${currentMatch[3]}`;
  }

  let messageRegex = new RegExp(`${keyword}(.+)${keyword}`, 'g');
  let message = 'Message: '; 
  message += messageRegex.exec(text)[1];
  let pMessageEl = document.createElement('p');
  pMessageEl.textContent = message;

  let result = document.querySelector('#result');
  for (const key in coords) {
    let p = document.createElement('p');
    p.textContent = `${coords[key]} ${key}`;
    result.appendChild(p);
  }

  result.appendChild(pMessageEl);

}