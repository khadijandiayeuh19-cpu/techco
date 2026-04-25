// Menu burger pour mobile
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger) {
  burger.addEventListener('click', () => {
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
  });
}
