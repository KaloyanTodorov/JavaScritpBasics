function solve() {
    let divs = Array.from(document.querySelectorAll('#exercise>div'));
    
    divs.forEach(element => {
        let aElement = element.querySelector('a');
        let spanElement = element.querySelector('span');
        let arr = spanElement.textContent.split(' ');
        let clicks = Number(arr[1]);

        aElement.addEventListener('click', () => {
            spanElement.textContent = `Visited: ${++clicks} times`;
        })
    })
}