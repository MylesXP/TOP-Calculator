// Declaring variables for doc elements
let calcButton = document.querySelectorAll('.calc-button');
let calcDisplay = document.getElementById('calc_display');

// calcButton.forEach(x => x.addEventListener('click', () => calcDisplay.textContent = x.textContent))
calcButton.forEach(x => {x.addEventListener('click', () => {

    if (x.textContent.includes(Number(x.textContent))) {
        calcDisplay.textContent += x.textContent
    }

})})




// Declaring functions for calc operations
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