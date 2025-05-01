function add(a, b){    
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        console.log("Cannot divide by 0");
        return null;
    }
    return a / b;
}

function operate(a, b, op){
    let answer = "0";
    a = Number(a);
    b = Number(b);
    switch(op){
        case '+':
            answer = add(a, b);
            return answer;            
        case '-':
            answer = subtract(a, b);
            return answer;
        case '*':
            answer = multiply(a, b);
            return answer;
        case '/':
            answer = divide(a, b);
            return answer;
        default:
            console.log("Error with operator select");
            return null;
    }
}

let firstNum = 0;
let secondNum = 0;
let operator = "";
let counter = 0;
let answer = 0;
let solved = 0;

const btns = document.getElementById("container");
const display = document.querySelector("#display");


btns.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON"){
        console.log(e.target.textContent);
        if (e.target.textContent === "="){
            secondNum = display.textContent;        
            answer = operate(firstNum, secondNum, operator);
            display.textContent = answer;
            counter = 0;
            solved = 1;
        } else if (!isNaN(e.target.textContent)){
            if (solved === 1){
                display.textContent = ""; 
                solved = 0;
            }
            const btnText = e.target.textContent;
            display.textContent = display.textContent + btnText;
        } else {
            if (counter === 0){                
                firstNum = display.textContent;
                operator = e.target.textContent;          
                display.textContent = "";
                counter = 1;
            } else if (counter === 1){
                secondNum = display.textContent;
                firstNum = operate(firstNum, secondNum, operator);
                display.textContent = firstNum;                
                solved = 1;                
            }
        }
    }
});
