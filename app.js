// Declare variables for doc elements
let calcButton = document.querySelectorAll('.calc-button');
let calcDisplay = document.getElementById('calc_display');
// let calcDisplayContent = calcDisplay.textContent;
// Iterate over array of buttons, adding event listener that determines what button is pressed
calcButton.forEach(x => {x.addEventListener('click', () => {
    if (x.textContent.includes(Number(x.textContent))) {
        calcDisplay.textContent += x.textContent
    }
    
    else if (x.classList.contains('calc-equals')){
        calcButton.forEach(x => x.classList.remove('opActive'))
    } 

    else if (x.classList.contains('calc-clear')) {
        calcDisplay.textContent = ''
        calcButton.forEach(x => x.classList.remove('opActive'))
    }

    else if (x.classList.contains('cal-op'))  {
        calcDisplay.textContent = ''
        x.classList.add('opActive')
    }

    else if (x.classList.contains('calc-percent')){
        calcDisplay.textContent = ''
    }

    else if (x.classList.contains('calc-decimal')) {
        if (calcDisplay.textContent.includes('.')) {
            return
        } else {
            calcDisplay.textContent += x.textContent
        }
    }
    
    
    // else if (!x.classList.contains('calc-equals')){
    //     calcDisplay.textContent = ''
    //     x.classList.add('opActive')
    // }
    
    
    // else if (x.classList.contains('calc-clear')) {
    //     calcDisplay.textContent = ''
    //     calcButton.forEach(x => x.classList.remove('opActive'))
    // } 




    //seperate else if statement specifically fro posneg

})})

// Declare functions for calc operations
let add = function (x,y) {
    return x + y;
};

let sub = function (x,y) {
    return x - y;
};

let multi = function (x,y){
    return x * y;
};

let divide = function (x,y) {
    return x / y;
};

let operate = function (x, op, y) {
    if (op == '+') {
        return 
    }
}