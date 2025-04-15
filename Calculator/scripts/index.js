
const app = document.getElementById('Calculator');

//main div
const calculator = document.createElement('div');
calculator.classList.add('calculator');
//display
const display = document.createElement('input');
display.classList.add('display');
display.type = 'text';
display.readOnly = true;
display.value = '0';
calculator.appendChild(display);

// btn container
const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons');

// Buttons
const buttons = [
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '/', value: '/' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '*', value: '*' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '-', value: '-' },
    { label: '0', value: '0' },
    { label: '.', value: '.' },
    { label: '=', value: '=' },
    { label: '+', value: '+' },
    { label: '%', value: '%' },
    { label: 'C', value: 'clear' }
];

// btn click
function handleButtonClick(value) {
    if (value === 'clear') {
        display.value = '0';
    } else if (value === '=') {
        try {
            display.value = eval(display.value); 
        } catch (error) {
            display.value = 'Error';
        }
    } else {
        if (display.value === '0' || display.value === 'Error') {
            display.value = value;
        } else {
            display.value += value;
        }
    }
}

// add btns 
buttons.forEach(buttonData => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = buttonData.label;

    // op class
    if (['/', '*', '-', '+', '%'].includes(buttonData.value)) {
        button.classList.add('operator');
    } else if (buttonData.value === 'clear') {
        button.classList.add('clear');
    }

    // event lis
    button.addEventListener('click', () => handleButtonClick(buttonData.value));

   
    buttonsContainer.appendChild(button);
});

//final append everything
calculator.appendChild(buttonsContainer);
app.appendChild(calculator);