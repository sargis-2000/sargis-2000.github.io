const weekList = document.querySelector('.objective-list');
const monthList = document.querySelector('.bottom-list');

function check(e) {
    const target = e.target
    if(target.tagName !== 'INPUT') return;
    target.checked ? target.closest('.objective-list__item').style.backgroundColor = '#FF8B20' :
    target.closest('.objective-list__item').removeAttribute('style');
}

weekList.onclick = check;
monthList.onclick = check;