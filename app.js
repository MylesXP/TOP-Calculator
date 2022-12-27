// Declare variables for doc elements
let calcButton = document.querySelectorAll('.calc-button');
let calcDisplay = document.getElementById('calc_display');
let calcOpButtons = document.querySelectorAll('.calc-op')
let num1;
let num2;

calcDisplay.textContent = '0';


// Functions for math operations
let add = function (x,y) {
    return x + y;
};

let sub = function (x,y) {
    return x - y
};

let multi = function (x,y) {
    return x * y
};

let divide = function (x,y) {
    return x / y
};


// Stores the first number
calcOpButtons.forEach(x => x.addEventListener('click', () => {
    if (!num1) {
        num1 = calcDisplay.textContent;
        calcDisplay.textContent = '';
    } 
}));


// Operate function that takes 2 nums and an operator and calls one of the functions above
let operate = function (op) {
    num2 = calcDisplay.textContent
    switch (op) {
        case '+':
            console.log(add(Number(num1),Number(num2)));
            break;
        case '-':
            console.log(sub(Number(num1),Number(num2)));
            break;
        case '*':
            console.log(multi(Number(num1),Number(num2)));
            break;
        case '/':
            console.log(divide(Number(num1),Number(num2)));
            break;
        default:
            console.log('ERROR')
            console.log(Array.from(calcButton).find(x => x.classList.contains('op-active')).innerText)
            console.log(typeof Array.from(calcButton).find(x => x.classList.contains('op-active')).innerText)
    };
    calcButton.forEach(x => x.classList.remove('op-active'));
};


// Functions that populate display with number button values
let numButtons = function(x){
    if (x == 0) {
        if (calcDisplay.textContent == '0') {
            return;
        }
    } else if (x == '.') {
        if (calcDisplay.textContent.includes('.')) {
            return;
        } else if (calcDisplay.textContent == '') {
            calcDisplay.textContent += "0"
        }
    } else if (!x == 0 && calcDisplay.textContent == 0) {
        if(!calcDisplay.textContent.includes('.')){
            calcDisplay.textContent = calcDisplay.textContent.replace('0', '');
        } 
    } else if (calcDisplay.classList.contains('calc-display__result')){
        calcDisplay.textContent = ''
        calcDisplay.classList.remove('calc-display__result')
    }

    calcDisplay.classList.remove('calc-display__result')
    calcDisplay.textContent += x
};


// Function for clearing the screen when clear button is clicked
let clearDisplay = function () {
    num1 = '';
    num2 = '';
    calcDisplay.textContent = 0;
    calcButton.forEach(x => x.classList.remove('op-active'));
    calcDisplay.classList.remove('calc-display__result')
};


// Logic for adding or removing active operator (op-active) class to operator buttons when clicked
calcOpButtons.forEach(x => x.addEventListener('click', () => {
    if (x.classList.contains('calc-op'))  {
        // calcDisplay.textContent = ''
        calcButton.forEach(x => x.classList.remove('op-active'))
        x.classList.add('op-active')
    }
}));



