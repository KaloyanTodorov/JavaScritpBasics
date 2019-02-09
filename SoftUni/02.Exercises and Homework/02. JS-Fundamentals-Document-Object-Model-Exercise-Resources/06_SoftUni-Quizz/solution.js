function solve() {
	const sections = Array.from(document.querySelectorAll('section'));
	let result = 0;

	for (let i = 0; i < sections.length; i++) {
		const section = sections[i];
		const button = section.querySelector('button');
		button.addEventListener('click', function() {
			const answers = Array.from(section.querySelectorAll('input'));
			for (const answer of answers) {
				if(answer.checked && i < sections.length - 1) {
					sections[i + 1].removeAttribute('class');
				} 
				if(answer.checked && (answer.value === "2013" ||
				answer.value === "Pesho" ||
				answer.value === "Nakov")) {
					result++;
				}
			}
		})

		if(i === sections.length - 1) {
			button.addEventListener('click', function() {
				let resultDivElement = document.getElementById('result');
				if(result < 3) {
					resultDivElement.textContent = `You have ${result} right answers`;
				} else if(result === 3) {
					resultDivElement.textContent = "You are recognized as top SoftUni fan!";
				}
			})	
		}
	}
}