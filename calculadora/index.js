

let  display;
let symbol = "";
let currNum="";
let result =0;
let num1=0;
let num2=0;
let valid = {number: true, symbol:false, result:false}

window.onload = function init (){
   display = document.getElementById("displayb")
   display.textContent = "0"
}

function limpiar(){
    display.textContent="0"
    console.log("clear")
    num=0
    symbol=""
    result=0
    currNum=""
    valid.number=true;
    valid.symbol=false;
    valid.result=false;
}

function addNum(num){
    if(valid.number){
        currNum = currNum + num
    }
    console.log(currNum)
}

function addSymbol(symbolel){
    symbol = symbolel
    console.log("+" == symbol)
}

function updateDisplay(el){
    if(display.textContent == 0){
     display.textContent = el
    }else {
    temp = display.textContent + el;
    display.textContent = temp
    }
}

function pressNum(numel){
    if(valid.number){
        addNum(numel.textContent);
        updateDisplay(numel.textContent);
        if(valid.symbol){valid.result = true}
        valid.symbol = true;
        console.log('+' == symbol)
    }
}

function pressSymbol(sym){
    if(valid.symbol){
        if(num1 && currNum){pressRes()}
        addSymbol(sym)
        num1 = parseInt(currNum);
        valid.symbol=false;
        updateDisplay(sym);
        if(result !== 0){
            num1= result;
        }
        
        currNum = "";
    }
}

function pressRes(){ 
    
    if(true){
    switch (symbol) {
            case '+':
              result = num1 + parseInt(currNum);
              break;
            case '-':
                result = num1 - parseInt(currNum);
            break;
            case '/':
              result = num1 / parseInt(currNum);
            break;
            case '*':
              result = num1 * parseInt(currNum);
            break;
    }
    startOver()
    }
}


function startOver(){
 display.textContent= result + ""
}