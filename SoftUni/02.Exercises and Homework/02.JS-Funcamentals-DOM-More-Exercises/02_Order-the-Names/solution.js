function solve(){
    let inputElemenent = document.querySelector('input');
    let registerButton = document.querySelector('button');
    let list = document.querySelectorAll('ol>li');

    let elementsArr = [];

    registerButton.addEventListener('click', () => {
        let name = inputElemenent.value;
        let firstLetter = inputElemenent.value.toLowerCase().charCodeAt(0);

        if(list[firstLetter - 97].textContent === '') {
            list[firstLetter - 97].textContent = name;
        } else {
            list[firstLetter - 97].textContent += ', ' + name;
        }
        inputElemenent.value = ''
    })
}
