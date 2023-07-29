const personalItems = Array.from(document.querySelectorAll('.personal-date__item'))

personalItems.forEach(item => {
    const input = item.querySelector('.personal-date__input');
    const dateInput = document.querySelector('#date');
    const label = dateInput.nextElementSibling;
    if(input) {
        input.onfocus = function() {
        if(label.textContent === '') {
            label.textContent = input.value;
            input.value = '';
        }
        const elem = document.querySelector('.personal-date__item[style]');
        if(elem) elem.removeAttribute('style');
        const parent = this.closest('.personal-date__item');
        parent.style.border = '1px solid #FF922D'
       }
       
       input.onblur = () => {
        const date = document.querySelectorAll('.ui-state-default');
        date.forEach(item => {
            item.onclick = () => {
                if(input.value === '') {
                    input.nextElementSibling.textContent = input.value;
                    input.value = '';
                }
            }
        })
        if(input.value !== '') {
            input.nextElementSibling.textContent = input.value;
            input.value = '';
        }
        item.removeAttribute('style');
       }
    }
});

const dateBtn = document.querySelector('#date-btn');
dateBtn.onclick = () => {
    dateBtn.parentNode.querySelector('input').focus();
}
$(function() {
    $( "#date" ).datepicker();
});