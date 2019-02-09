function solve() {
	let divElement = document.querySelector('#exercise div');
	divElement.style.marginLeft = getRandomInt(85) + '%';
	divElement.style.marginTop = getRandomInt(45) + 'vh';
	
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }
  