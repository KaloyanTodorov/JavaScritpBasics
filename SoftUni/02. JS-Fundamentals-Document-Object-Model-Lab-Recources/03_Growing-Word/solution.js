function solve() {
   const button = document.querySelector('button');
   const p = document.querySelector('div#exercise p');
   let counter = 0;
   button.addEventListener('click', () => {
      if(counter % 3 === 0) {
         p.style.color = 'blue';
      } else if( counter % 3 === 1) {
         p.style.color = 'green';
      } else if( counter % 3 === 2) {
         p.style.color = 'red';
      }
      counter++;
      p.style.fontSize = counter * 2 + 'px';
   });
}