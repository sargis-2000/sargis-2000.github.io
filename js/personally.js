const personallyCards = document.querySelector('.personally-cards');
const personallyPopup = document.querySelector('.personally-popup');
const CloseBtn = document.querySelector('.personally-popup__close')

function personallyPopupClose() {
    personallyPopup.classList.remove('active');
    document.documentElement.removeAttribute('style');
}

personallyPopup.onclick = personallyPopupClose;
CloseBtn.onclick = personallyPopupClose;
personallyPopup.querySelector('.personally-popup__item').
onclick = e => e.stopPropagation();

personallyCards.onclick = e => {
    if(e.target.className !== 'personally-cards__btn') return;
    personallyPopup.classList.add('active');
    document.documentElement.style.overflowY = 'hidden';
}

// center popup
const popup = document.querySelector('.personally-popup__item');
const screenHeight = window.innerHeight;
const popupHeight = popup.offsetHeight;
function centerPopup() {
    if(popupHeight > screenHeight) {
        popup.style.height = '100%';
    } else {
        popup.removeAttribute('style');
    }
}

window.addEventListener('load', centerPopup);
window.addEventListener('resize', centerPopup);