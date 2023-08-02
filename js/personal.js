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
                if(input.value !== '') {
                    item.classList.add('active');
                }
            });
        }
        
        input.onblur = function () {
            if(this.value !== '') {
            this.closest('.input-wrapper').querySelector('label').textContent = this.value;
            this.value = '';
            item.removeAttribute('style');
            } else {
                item.removeAttribute('style');
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