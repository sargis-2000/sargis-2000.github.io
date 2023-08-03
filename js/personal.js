const personalItems = Array.from(document.querySelectorAll('.personal-date__item'))

personalItems.forEach(item => {
    const input = item.querySelector('.personal-date__input');
    const dateInput = document.querySelector('#date');
    const label = dateInput.nextElementSibling;
    if(input) {
        input.onfocus = function() {
            const parent = this.closest('.personal-date__item');
            const path = parent.querySelectorAll('path');
            path.forEach(item => {
                item.classList.add('active');
            });
            parent.classList.add('active');
        }
        
        input.onblur = function () {
            const parent = this.closest('.personal-date__item');
            const path = parent.querySelectorAll('path');
            parent.classList.remove('active');
            parent.querySelector('label').classList.remove('active');
            parent.querySelector('label').classList.remove('yellow');
            path.forEach(item => {
                item.classList.remove('active');
            });
            if(this.value !== '') {
                input.classList.add('active');
                parent.querySelector('label').classList.add('active');
            } else {
                item.removeAttribute('style');
                input.classList.remove('active');
            }
       }
    }
});


const input = $('#date').pickadate({
    weekdaysShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    monthsFull: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    today: 'Сегодня',
    clear: 'Очистить',
    close: 'Закрыть',
    closeOnSelect: false,
    closeOnClear: false,
});
const picker = input.pickadate('picker');

$('#date-btn').on('click', function(event) {
    event.stopPropagation();
    picker.open();
});


const select = document.querySelector('select');
const parent = select.parentNode.closest('.personal-date__item');
const paths = parent.querySelectorAll('path');
const options = select.querySelectorAll('option');

select.onfocus = () => {
    paths.forEach(path => {
        path.classList.add('active');
    });
    parent.classList.add('active');
}


select.onblur = () => {
    paths.forEach(path => {
        path.classList.remove('active');
    });
    parent.classList.remove('active');
}

select.onchange = () => {
    paths.forEach(path => {
        path.classList.remove('active');
    });
    parent.classList.remove('active');
    select.blur();
}