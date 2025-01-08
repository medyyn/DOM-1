const lamp = document.querySelector('.lamp');
const button = document.getElementById('toggleButton');
let isOn = false;
button.addEventListener('click', () => {
    isOn = !isOn;
    if (isOn) {
        lamp.classList.add('on');
        button.textContent = 'Söndür';
    } else {
        lamp.classList.remove('on');
        button.textContent = 'Yandır';
    }
});