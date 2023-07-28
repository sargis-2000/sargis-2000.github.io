const personalItems = Array.from(document.querySelectorAll('.personal-date__item'))

personalItems.forEach(item => {
    const input = item.querySelector('.personal-date__input');
    if(input) {
        input.onfocus = function() {
        const elem = document.querySelector('.personal-date__item[style]');
        if(elem) elem.removeAttribute('style');
        const parent = this.closest('.personal-date__item');
        parent.style.border = '1px solid #FF922D'
       }
       input.onblur = () => item.removeAttribute('style');
    }
});