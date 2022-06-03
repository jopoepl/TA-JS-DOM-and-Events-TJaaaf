let buttons = document.querySelector(`.btn-cont`)
let input = document.querySelector(`input`)
let calc = document.querySelector(`.container`)
let screen = document.querySelector(`.screen`)


let inputValue = "";
let result = 0;

calc.addEventListener("click", function(event) { 
    if(event.target.innerText === `C`){
        inputValue = "";
    } if(event.target.innerText === `=`){
        input.value =  result;
    } else {
    inputValue += `${event.target.dataset.value}`;
    input.value = inputValue
    result = eval(inputValue);   
    }
})






