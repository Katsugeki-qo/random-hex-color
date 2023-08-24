document.querySelector('.js-button').addEventListener('click', () => {
   changeColor();
});

function changeColor() {
    let hex_numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    let hexcode = '';

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hex_numbers.length);

        hexcode += hex_numbers[randomIndex];
    }

    document.getElementById('js-hex-code').textContent = hexcode;
    document.body.style.background = '#' + hexcode;
}