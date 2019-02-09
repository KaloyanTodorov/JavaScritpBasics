function solve() {
 let buttons = document.getElementsByTagName('button');
 for (const button of buttons) {
    button.addEventListener('click', function(e) {
        let myMessage = document.getElementById('myChatBox');
        let peshoMessage = document.getElementById('peshoChatBox');

        let sender = document.createElement('span');
        let messege = document.createElement('p');
        let divContainer = document.createElement('div');
        let incomingMessage;
        let chatChronology = document.getElementById('chatChronology');

        if(e.target.name === 'myBtn' && myMessage.value !== '') {
            incomingMessage = document.getElementById('myChatBox');
            sender.textContent = 'Me';
            messege.textContent = incomingMessage.value;
            divContainer.style.textAlign = 'left';
        } else if(e.target.name === 'peshoBtn' && peshoMessage.value !== '') {
            incomingMessage = document.getElementById('peshoChatBox');
            sender.textContent = 'Pesho';
            messege.textContent = incomingMessage.value;
            divContainer.style.textAlign = 'right';
        } 
        
        if(sender.textContent !== '' && messege.textContent  !== '') {
            divContainer.appendChild(sender);
            divContainer.appendChild(messege);
            chatChronology.appendChild(divContainer);
        }
        incomingMessage.value = '';
        })
    }
}