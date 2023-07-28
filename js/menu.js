const menuCloseBtn = document.querySelector('.sidebar__close-btn');
const menuBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.sidebar');

menuBtn.onclick = () => menu.classList.add('active');
menuCloseBtn.onclick = () => menu.classList.remove('active');