const profileChangeBtn = document.querySelector('.profile-change');
const profilePopup = document.querySelector('.profile-popup');
const closeBtn = profilePopup.querySelector('.profile-popup__close');

function closePopup() {
    profilePopup.classList.remove('active');
    document.documentElement.removeAttribute('style');
}

profilePopup.onclick = closePopup;
closeBtn.onclick = closePopup;
profilePopup.querySelector('.profile-popup__item').onclick = e => e.stopPropagation();

profileChangeBtn.onclick = () => {
    profilePopup.classList.add('active');
    document.documentElement.style.overflowY = 'hidden';
}