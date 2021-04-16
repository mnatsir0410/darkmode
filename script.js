const mode = document.querySelector('.mode-changer');
const text = document.querySelector('.mode-text');

mode.addEventListener('click', e=> {
  document.body.classList.toggle('dark');
  text.textContent = 'this is dark mode';
  if(document.body.classList != 'dark'){
    text.textContent = 'this is light mode';
  }
});