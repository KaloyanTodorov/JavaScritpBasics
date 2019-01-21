
function register() {
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const email = document.getElementById('email');
  const regex = /(.+)@(.+).(com|bg)/gm;
  const emailRegex = email.value.match(regex);

  if(username.value && password.value && emailRegex) {
    let result = document.getElementById('result');
    let header = document.createElement('h1');
    header.textContent = 'Successful Registration!';
    let usernameDiv = document.createTextNode('Username: ' + username.value);
    const br1 = document.createElement('br');
    let emailDiv = document.createTextNode('Email: ' + email.value);
    const br2 = document.createElement('br');
    let passwordDiv = document.createTextNode('Password: ' + '*'.repeat(password.value.length));
    
    result.appendChild(header);
    result.appendChild(usernameDiv);
    result.appendChild(br1);
    result.appendChild(emailDiv);
    result.appendChild(br2);
    result.appendChild(passwordDiv);

    setTimeout(function() {
      result.style.display = 'none';
    }, 5000);
  }
}
