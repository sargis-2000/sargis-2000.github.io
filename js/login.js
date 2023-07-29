const formItems = document.querySelectorAll('.form-items__item');

formItems.forEach(item => {
    const input = item.querySelector('input');
    input.onfocus = () => {
        item.style.outline = '1px solid #FF922D';
    }
    input.onblur = () => {
        if(input.value !== '') {
            input.nextElementSibling.textContent = input.value;
            input.value = '';
        }
        item.removeAttribute('style');
    }
});