const main = document.querySelector('.wrapper');
const sidebar = document.querySelector('aside');
const deviceHeight = window.innerHeight;
const mainHeight = main.offsetHeight;

function centerContent() {
    if(mainHeight > deviceHeight) {
        main.style.height = `${deviceHeight - 40}px`;
        sidebar.style.height = `${deviceHeight - 40}px`;
    } else {
        main.removeAttribute('style');
    }
}

window.addEventListener('load', centerContent);
window.addEventListener('resize', centerContent);