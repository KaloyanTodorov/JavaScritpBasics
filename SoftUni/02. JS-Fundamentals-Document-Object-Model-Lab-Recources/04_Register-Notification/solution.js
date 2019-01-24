
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
    
    result.appendChild(header);
    result.innerHTML += 'Username: ' + username.value;
    result.appendChild(document.createElement('br'));
    result.innerHTML += 'Email: ' + email.value;
    result.appendChild(document.createElement('br'));
    result.innerHTML += 'Password: ' + '*'.repeat(password.value.length);

    username.value = '';
    email.value = '';
    password.value = '';

    setTimeout(function() {
      result.remove();
    }, 5000);
  }
}
