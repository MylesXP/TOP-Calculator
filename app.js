// Declare variables for doc elements
let calcButton = document.querySelectorAll('.calc-button');
let calcDisplay = document.getElementById('calc_display');
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


// Operate function that takes 2 nums and an operator and calls one of the functions above
let operate = function (x, op, y) {
    switch (op) {
        case '+':
            return add(x,y);
        case '-':
            return sub(x,y);
        case '*':
            return multi(x,y);
        case '/':
            return divide(x,y);
        default:
            console.log('ERROR')
    }
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
}

// Function for clearing the screen when clear button is clicked
let clearDisplay = function () {
    num1 = '';
    num2 = '';
    calcDisplay.textContent = 0;
    calcButton.forEach(x => x.classList.remove('opActive'));
    calcDisplay.classList.remove('calc-display__result')
}



