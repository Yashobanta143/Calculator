// Getting DOM elements
const display = document.getElementById("display");
const display2 = document.getElementById("display2");
display2.value = display.value;


// color change on error showing
function errorColor(){
   display2.style.color = "red";
}


// color change on normal evaluation
function evalColor(){
    display2.style.color = "green";
 }


// calculate
function calculate(){
    try {
        evalColor()
        display2.value = eval(display.value);
    } catch () {
        errorColor()
        display.value = "";
        display2.value = "Error";     
    }
}


//clear Display
function clearDisplay(){
    display.value = "";
}


//Delete input
function deleteInput(){
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}


//function used to display inputs and results
function showOnDisplay(input){
    display.value += input;

}

//Square root function:
function sqRoot() {
    try {
        const value = display.value;
        if (value ==""){
            console.log("null")
            display.value = "";
        } else {
    const sq_root = Math.pow(value, 1/2);
    if (isNaN(sq_root)) {
        display.value = "";
        errorColor();
        display2.value = "Error";
    } else {
        display.value = sq_root.toFixed(3);
        evalColor();
        display2.value = display.value;
    }
    } 
    }catch () {
        errorColor();
        display.value = "Error";
    }
    
}

//Percentage function:
function percentage() {
    if (display.value == "") {
        // If user types percentage button before any input.
        display.value = "";
    } else {
        display.value += "/100*";
    }
    
}

// AddEventListener:
// Keypress event not triggered for "backspace key".
display.addEventListener('keydown', (e) =>{
    keyValue = e.key;
    switch (keyValue) {
        case '1':
            showOnDisplay(1);
            break;
        case '2':
            showOnDisplay(2);
            break;
        case '3':
            showOnDisplay(3);
            break;        
        case '4':
            showOnDisplay(4);
            break;
        case '5':
            showOnDisplay(5);
            break;
        case '6':
            showOnDisplay(6);
            break;
        case '7':
            showOnDisplay(7);
            break;
        case '8':
            showOnDisplay(8);
            break;
        case '9':
            showOnDisplay(9);
            break;
        case '0':
            showOnDisplay(0);
            break;                            
        case '*':
            showOnDisplay('*');
            break;
        case '+':
            showOnDisplay('+');
            break;
        case '-':
            showOnDisplay('-');
            break;
        case '/':
            showOnDisplay('/');
            break;
        case '.':
            showOnDisplay('.');
            break;    
        case 'Enter':
            calculate();
            break;
        case '=':
            calculate();
            break;
        case '%':
            percentage();
            break;
        case "Backspace":
            deleteInput();
            break;                                                             
    }
})




  


