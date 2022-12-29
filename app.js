// Declare variables for doc elements
let calcButton = document.querySelectorAll('.calc-button');
let calcDisplay = document.getElementById('calc_display');
let calcOpButtons = document.querySelectorAll('.calc-op')
let num1;
let num2;

calcDisplay.textContent = '0';

// Functions for math operations
let add = function (x,y) {
    return calcDisplay.textContent = (x + y);
};

let sub = function (x,y) {
    return calcDisplay.textContent = (x - y);
};

let multi = function (x,y) {
    return calcDisplay.textContent = (x * y);
};

let divide = function (x,y) {
    return calcDisplay.textContent = (x / y);
};

// Positive Negative Button Logic
let posneg = function () {
    if (calcDisplay.textContent === '') {
        return;
    } else if (calcDisplay.classList.contains('calc-display__result')) {
        calcDisplay.classList.remove('calc-display__result')
    }
    calcDisplay.textContent = (Number(calcDisplay.textContent) * -1).toString()
}


// Stores the first number
calcOpButtons.forEach(x => x.addEventListener('click', () => {
    if (!num1) {
        num1 = calcDisplay.textContent;
        calcDisplay.textContent = '';
    }

    if (num1 && calcDisplay.textContent && !calcDisplay.classList.contains('calc-display__result')) {
        num2 = calcDisplay.textContent
        // num1 = add(Number(num1), Number(num2));
        switch (Array.from(calcOpButtons).find(x => x.classList.contains('op-active')).innerText){
            case '+':
                num1 = add(Number(num1),Number(num2));
                calcDisplay.textContent = num1;
                break;
            case '-':
                num1 = sub(Number(num1),Number(num2));  
                calcDisplay.textContent = num1;
                break;
            case '*':
                num1 = multi(Number(num1),Number(num2));
                calcDisplay.textContent = num1;
                break;
            case '/':
                num1 = divide(Number(num1),Number(num2));
                calcDisplay.textContent = num1;
                break;
            default:
                calcDisplay.textContent = 'ERROR'
        };
        num2 = '';
        calcDisplay.classList.add('calc-display__result');
        calcButton.forEach(x => x.classList.remove('op-active'));
    }
    
    if (x.classList.contains('calc-op'))  {
        calcButton.forEach(x => x.classList.remove('op-active'))
        x.classList.add('op-active')
    }

    
}));


// Operate function that takes an operator and calls one of the functions above on num1 and num2
let operate = function (op) {
    num2 = calcDisplay.textContent
    switch (op) {
        case '+':
            add(Number(num1),Number(num2));
            num1 = ''
            num2 = ''
            break;
        case '-':
            sub(Number(num1),Number(num2));
            num1 = ''
            num2 = ''   
            break;
        case '*':
            multi(Number(num1),Number(num2));
            num1 = ''
            num2 = ''
            break;
        case '/':
            divide(Number(num1),Number(num2));
            num1 = ''
            num2 = ''
            break;
        default:
            calcDisplay.textContent = 'ERROR'
    };
    calcDisplay.classList.add('calc-display__result');
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
    };


    if (calcDisplay.innerText.length > 5) {
        calcDisplay.textContent = Number(calcDisplay.textContent).toFixed(2)
    }

    calcDisplay.classList.remove('calc-display__result')
    calcDisplay.textContent += x
};


// Function for clearing the screen when clear button is clicked
let clearDisplay = function () {
    num1 = '';
    num2 = '';
    calcDisplay.textContent = '0';
    calcButton.forEach(x => x.classList.remove('op-active'));
    calcDisplay.classList.remove('calc-display__result')
};

// Dont display more than 9 digits on display, convert to scientific notation if input or result exceeds 9 numbers

if (calcDisplay.innerText.length > 9) {
    console.log('hello')
}


