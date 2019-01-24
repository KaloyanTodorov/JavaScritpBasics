function solve() {
    const cards = document.getElementsByTagName('img');

    for (const el of cards) {
        el.addEventListener('click', checkCards);
        
        function checkCards(e) {
            const card = e.target;
            const parent = card.parentNode;
    
            card.src = "images/whiteCard.jpg";
    
            el.removeEventListener('click', checkCards);
    
            let leftResult = document.getElementById('result').children[0];
            let rightResult = document.getElementById('result').children[2];
            
            if(parent.id === 'player1Div') {
                leftResult.textContent = card.name;
            } else if(parent.id === 'player2Div') {
                rightResult.textContent = card.name;
            }

            let winner;
            let looser;

            if(leftResult.textContent !== '' && rightResult.textContent !== '') {
                if(Number(leftResult.textContent) > Number(rightResult.textContent)) {
                    winner = document.querySelector(`#player1Div img[name="${leftResult.textContent}"]`);
                    looser = document.querySelector(`#player2Div img[name="${rightResult.textContent}"]`);
                } else {
                    looser = document.querySelector(`#player1Div img[name="${leftResult.textContent}"]`);
                    winner = document.querySelector(`#player2Div img[name="${rightResult.textContent}"]`);
                }
    
                winner.style.border = "2px solid green";
                looser.style.border = "2px solid darkred";
                document.getElementById('history').textContent += `[${leftResult.textContent} vs ${rightResult.textContent}] `;

                setTimeout(function() {
                    leftResult.textContent = '';
                    rightResult.textContent = '';
                }, 2000);
                    
            }
        };
    }
}