// Declare variables for doc elements
let calcButton = document.querySelectorAll('.calc-button');
let calcDisplay = document.getElementById('calc_display');
// let calcDisplayCont = calcDisplay
// calcDisplayCont = '0'


// Declare function for number button presses
let numButtons = function(x){
    if (x == 0) {
        if (calcDisplay.textContent == '0') {
            return;
        }
    }

    calcDisplay.textContent += x
}

// Declare functions for calc operations
let add = function (x,y) {
    x + y;
};

let sub = function (x,y) {
    x - y;
};

let multi = function (x,y){
    x * y;
};

let divide = function (x,y) {
    x / y;
};

let operate = function (x, op, y) {
    if (op == '+') {
    }
}

let posneg = function () {
    calcDisplay.textContent = (Number(calcDisplay.textContent) * -1).toString()
}

let equals = function () {
    calcButton.forEach(x => x.classList.remove('opActive'))
}

let percentage = function () {
    calcDisplay.textContent = ''
}


// Not clearing display or removing classes
let clear = function () {
    calcDisplay.value = '';
    calcButton.forEach(x => x.classList.remove('opActive'));
}


// Iterate over array of buttons, adding event listener that determines what button is pressed
calcButton.forEach(x => {x.addEventListener('click', () => {
    
    if (x.classList.contains('cal-op'))  {
        calcDisplay.textContent = ''
        x.classList.add('opActive')
    } else if (x.classList.contains('calc-clear')) {
        calcDisplay.textContent = '';
        calcButton.forEach(x => x.classList.remove('opActive'));
    } else if (x.classList.contains('calc-decimal')) {
        if (calcDisplay.textContent.includes('.')) {
            return;
        } 
        calcDisplay.textContent += '.'  
    } 
    
    
    // else if (x.classList.contains('calc-posneg')) {
    //     calcDisplay.textContent = (Number(calcDisplay.textContent) * -1).toString()
    // }

})})



