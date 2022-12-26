// Declare variables for doc elements
let calcButton = document.querySelectorAll('.calc-button');
let calcDisplay = document.getElementById('calc_display');
let num1;
let num2;
// let calcDisplayCont = calcDisplay


// Declare function for number button presses
let numButtons = function(x){
    if (x == 0) {
        if (calcDisplay.textContent == '0') {
            return;
        }
    } 
    
    // else if (x == '.' && calcDisplay.textContent == ''){
    //     calcDisplay.textContent += "0"}  
        
        else if (x == '.') {
        if (calcDisplay.textContent.includes('.')) {
            return;
        } else if (calcDisplay.textContent == '') {
            calcDisplay.textContent += "0"
        }
    } else if (!x == 0 && calcDisplay.textContent == 0) {
        if(!calcDisplay.textContent.includes('.')){
            calcDisplay.textContent = calcDisplay.textContent.replace('0', '');
        } 
    } 

    calcDisplay.textContent += x
}

// Declare functions for calc operations

let storeVar = function () {
    num1 = calcDisplay.textContent;
    calcDisplay.textContent = '';
    console.log(num1)
}

let add = function (x,y) {
    console.log(y)
    console.log(Number(x) + Number(y))
    calcDisplay.innerText = x + y
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

let posneg = function () {
    if (calcDisplay.textContent === '') {
        return;
    }
    calcDisplay.textContent = (Number(calcDisplay.textContent) * -1).toString()
}

let percentage = function () {
    calcDisplay.textContent = ''
}

// Logic for equal button
// let equals = function () {
//     num2 = calcDisplay.textContent
//     calcDisplay.textContent = ''

//     if

//     console.log(num2)
//     calcButton.forEach(x => x.classList.remove('opActive'))
// }


// Takes in an operator as an argument and matches it to one of the above functions, and calls the matched function
let operate = function () {
    num2 = calcDisplay.textContent
    

    // calcButton.filter(x => x.classList.contains('opActive').textContent == '+')


    let calcButtonClassContent = Array.from(calcButton).find(x => x.classList.contains('opActive'))
    
    if (calcButtonClassContent.innerText == '+') {
        add(num1, num2)
    };
    
    calcDisplay.textContent = ''
    calcButton.forEach(x => x.classList.remove('opActive'))
}



let clearDisplay = function () {
    calcDisplay.textContent = '';
    calcButton.forEach(x => x.classList.remove('opActive'));
}


// Iterate over array of buttons, adding event listener that determines what button is pressed
calcButton.forEach(x => {x.addEventListener('click', () => {
    
     if (x.classList.contains('cal-op'))  {
        // calcDisplay.textContent = ''
        calcButton.forEach(x => x.classList.remove('opActive'))
        x.classList.add('opActive')
    }
    
    // else if (x.classList.contains('calc-decimal')) {
    //     if (calcDisplay.textContent.includes('.')) {
    //         return;
    //     }
    //     calcDisplay.textContent += x.textContent
    // }
})})



