function solve() {
	let encodeButton = document.getElementsByTagName('button')[0];
	let decodeButton = document.getElementsByTagName('button')[1];

	encodeButton.addEventListener('click', encode);
	decodeButton.addEventListener('click', decode);

	function encode() {
		let incomingMessage = document.getElementsByTagName('textarea')[0];
		if(incomingMessage.value !== '') {
			let encodedMessage = '';
			let messegeToEncode = (incomingMessage.value).split('').forEach(letter => {
				encodedMessage += String.fromCharCode(letter.charCodeAt(0) + 1);
			});

			let encodedMessageContainer = document.getElementsByTagName('textarea')[1];
			encodedMessageContainer.value = encodedMessage;
			incomingMessage.value = ''
		}
	}

	function decode() {
		let incomingMessage = document.getElementsByTagName('textarea')[1];
		if(incomingMessage.value !== '') {
			let decodedMessage = '';
			let messegeToDecode = (incomingMessage.value).split('').forEach(letter => {
				decodedMessage += String.fromCharCode(letter.charCodeAt(0) - 1);
			});

			let decodedMessageContainer = document.getElementsByTagName('textarea')[1];
			decodedMessageContainer.value = decodedMessage;
		}
	}
}