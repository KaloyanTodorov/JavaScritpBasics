function solve() {
    document.querySelector('div#exercise>form>button').addEventListener('click', addUser);
    document.querySelector('div#exercise>button').addEventListener('click', searchInUsers);
    let table = document.querySelector('table>tbody');
    function addUser(e){
        e.preventDefault();
        let username = document.querySelectorAll('div.user-info>input')[0].value;
        let password = document.querySelectorAll('div.user-info>input')[1].value;
        let email = document.querySelectorAll('div.user-info>input')[2].value;
        let topics = [];
        Array.from(document.querySelectorAll('div.topics>input:checked')).forEach(e => topics.push(e.value));
        
        const user = {
            username,
            password,
            email,
            topics,
        }
        let tr = document.createElement('tr');
        let tdUsername = document.createElement('td');
        let tdEmail = document.createElement('td');
        let tdTopics = document.createElement('td');

        tdUsername.textContent = user.username;
        tdEmail.textContent = user.email;
        tdTopics.textContent = user.topics.join(' ');

        tr.appendChild(tdUsername);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTopics);

        table.appendChild(tr);

 }

 function searchInUsers(e){
    e.preventDefault();
    let searchField = document.querySelector('div#exercise>input').value;
    Array.from(document.querySelectorAll('table>tbody>tr')).forEach(tr=> {
        tr.style.visibility = 'hidden';
        Array.from(tr.children).forEach(td => {
            debugger
            if(td.textContent.indexOf(searchField) > -1) {
                tr.style.visibility = 'visible';
            }
        })
    })
 }
}