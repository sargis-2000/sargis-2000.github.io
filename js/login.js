const formItems = document.querySelectorAll('.form-items__item');

formItems.forEach(item => {
    item.querySelector('input').onfocus = () => {
        item.style.outline = '1px solid #FF922D';
    }
    item.querySelector('input').onblur = () => {
        item.removeAttribute('style');
    }
});