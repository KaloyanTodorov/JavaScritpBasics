function solve() {
   const profiles = Array.from(document.getElementsByClassName('profile'));
   for (const profile of profiles) {
      let button = profile.getElementsByTagName('button')[0];
      button.addEventListener('click', function() {
         let profileUnlocked = profile.getElementsByTagName('input')[1];
         let hiddenDivId = profile.getElementsByTagName('div')[1].id;
         let hiddenDiv = document.getElementById(`${hiddenDivId}`);
         if(profileUnlocked.checked && button.textContent === 'Show more') {
            hiddenDiv.style.display = 'block';
            button.textContent = 'Hide it';
         } else if(profileUnlocked.checked && button.textContent === 'Hide it') {
            hiddenDiv.style.display = 'none';
            button.textContent = 'Show more';
         }
      })
   }
} 