const numberElement = document.getElementById('number');
const textNumberElement = document.getElementById('text-number');

let allowNegative = true;

function toggleNegative() {
    allowNegative = !allowNegative;

    if (!allowNegative) {
        toggleBtn.classList.add('active');
    } else {
        toggleBtn.classList.remove('active');
    }

    if (!allowNegative && parseInt(numberElement.innerText) < 0) {
        numberElement.innerText = '0';
        updateColor(0);
        applyParOrImpar(0);
    }
}

function changeNumber(incr) {
    let currentNumber = parseInt(numberElement.innerText) + incr;

    if (!allowNegative && currentNumber < 0) {
        currentNumber = 0;
    }

    numberElement.innerText = currentNumber;

    updateColor(currentNumber);
    applyParOrImpar(currentNumber);
}

function updateColor(number) {
    numberElement.style.color = number > 0 ? 'green' : (number < 0 ? 'red' : 'black');
}

function applyParOrImpar(number) {
    if (hasPar(number)) {
        textNumberElement.innerText = `${number} é número par`;
        textNumberElement.style.display = 'block';

    } else {
        textNumberElement.style.display = 'none';
    }
}

function hasPar(number) {
    return number !== 0 && number % 2 === 0;
}
