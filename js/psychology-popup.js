const materialsBtns = document.querySelectorAll('.materials__btn');

materialsBtns.forEach(button => {
    button.onclick = () => {
        const currentBtn = button.dataset.btn;
        const popup = document.querySelector(`.${currentBtn}`);
        popup.classList.add('active');
        popup.onclick = () => popup.classList.remove('active');
        popup.querySelector('.psychology-popup__item').onclick = e => e.stopPropagation();
        popup.querySelector('.psychology-popup__close').onclick = () => popup.classList.remove('active');
    }
});