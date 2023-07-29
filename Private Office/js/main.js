const main = document.querySelector('.wrapper');
const deviceHeight = window.innerHeight;
const mainHeight = main.offsetHeight;
const mainItem = main.querySelector('.main-wrapper');

function centerContent() {
    if(mainItem.offsetHeight < deviceHeight ) {
        mainItem.style.height = '100%';
    }
    if(mainHeight > deviceHeight ) {
        main.style.minHeight = `${deviceHeight }px`;
    } else {
        main.removeAttribute('style');
    }
}

window.addEventListener('load', centerContent);
window.addEventListener('resize', centerContent);