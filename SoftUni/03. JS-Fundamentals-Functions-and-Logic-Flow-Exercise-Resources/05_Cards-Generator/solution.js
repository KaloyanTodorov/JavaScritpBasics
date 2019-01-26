function solve() {
    const allCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const button = document.querySelector('button');
    button.addEventListener('click', addCards);

    function addCards() {
        let fromCard = document.querySelector('#from');
        let toCard = document.querySelector('#to');
        let cardSuit = document.querySelector('select');
        let sectionElement = document.querySelector('section#cards');

        const fromCardIndex = allCards.indexOf(fromCard.value);
        const toCardIndex = allCards.indexOf(toCard.value);
        let suit = '';
        if(cardSuit.value.includes('Hearts')) {
            suit = '&hearts;';
        } else if(cardSuit.value.includes('Spades')) {
            suit = '&spades;';
        } else if(cardSuit.value.includes('Diamonds')) {
            suit = '&diamond;';
        } else if(cardSuit.value.includes('Clubs')) {
            suit = '&clubs;';
        } 

        for (let index = fromCardIndex; index <= toCardIndex; index++) {
            const element = allCards[index];
            let divElement = document.createElement('div');
            divElement.classList.add('card');
            let firstSuitP = document.createElement('p');
            let secondSuitP = document.createElement('p');
            firstSuitP.innerHTML = suit;
            secondSuitP.innerHTML = suit

            let cardElement = document.createElement('p');
            cardElement.textContent = element;
            
            divElement.appendChild(firstSuitP);
            divElement.appendChild(cardElement);
            divElement.appendChild(secondSuitP);

            sectionElement.appendChild(divElement);
        }
        
        fromCard.value = '';
        toCard.value = '';
    }
}