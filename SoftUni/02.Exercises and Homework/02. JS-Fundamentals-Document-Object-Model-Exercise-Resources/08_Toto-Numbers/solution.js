function solve() {
	let button = document.querySelector('button');
	button.addEventListener('click', addTotoNumbers);

	function addTotoNumbers() {
		let inputFieldElement = document.querySelector('input');
		let numbers = Array.from(new Set(inputFieldElement.value.split(' ').map(Number)));
		
		let minNumber = Math.min(...numbers);
		let maxNumber = Math.max(...numbers);
	
		if(numbers.length === 6 && minNumber >= 1 && maxNumber <= 49) {
			let allNumbersDivElement = document.getElementById('allNumbers');

			for (let i = 1; i <= 49; i++) {
				let number = document.createElement('div');
				number.textContent = i;
				number.classList.add('numbers');
				if(numbers.includes(i)) {
					number.style.backgroundColor = 'orange';
				}
				allNumbersDivElement.appendChild(number);
			}
			button.setAttribute('disabled', true);
			inputFieldElement.setAttribute('disabled', true);
		}
	}
}