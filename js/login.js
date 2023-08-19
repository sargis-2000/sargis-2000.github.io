const formItems = document.querySelectorAll('.form-items__item');

formItems.forEach(item => {
    const input = item.querySelector('input');
    input.onfocus = function() {
        const parent = this.parentNode;
        const path = parent.nextElementSibling.querySelectorAll('path');
        path.forEach(item => item.classList.add('active'));
        item.style.outline = '1px solid #FF922D';
    }
    input.onblur = function() {
        const parent = this.parentNode.nextElementSibling;
        const path = parent.querySelectorAll('path');
        path.forEach(item => item.classList.remove('active'));
        if(input.value !== '') {
            input.classList.add('active');
            item.removeAttribute('style');
            input.nextElementSibling.classList.add('active');
        } else {
            item.removeAttribute('style');
            input.classList.remove('active');
            input.nextElementSibling.classList.remove('active');
        }
    }
});