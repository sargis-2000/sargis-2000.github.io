const personallyCards = document.querySelector('.personally-cards');
const personallyPopup = document.querySelector('.personally-popup');
const CloseBtns = document.querySelectorAll('.personally-popup__close')


personallyCards.onclick = e => {
    if(e.target.className !== 'personally-cards__btn') return;
    const dataAttribute = e.target.dataset.popup;
    const popup = document.querySelector(`.${dataAttribute}`);
    popup.classList.add('active');
    const closeBtn = popup.querySelector('.personally-popup__close');
    const popupItem = popup.querySelector('.personally-popup__item');
    closeBtn.onclick = () => popup.classList.remove('active');
    popup.onclick = () => popup.classList.remove('active');
    popupItem.onclick = e => e.stopPropagation();
}

// center popup
const popups = document.querySelectorAll('.personally-popup__item');
const screenHeight = window.innerHeight;

popups.forEach(popup => {
    if(popup.offsetHeight > screenHeight) {
        popup.style.height = '100%';
    } else {
        popup.removeAttribute('style');
    }
});