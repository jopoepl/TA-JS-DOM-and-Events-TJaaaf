let game = document.querySelector(".you")
let aiInputArray = [".fa-hand-rock-o", ".fa-hand-paper-o", ".fa-hand-scissors-o"]
let inputValue = document.querySelector(".input-value")
let outputValue = document.querySelector(".output-value")
let result = document.querySelector(".result")
let wins = document.querySelector(".wins")
let loss = document.querySelector(".loss")
let won = 0;
let lost = 0;
let rock = document.querySelector(".fa-hand-rock-o")
let paper =  document.querySelector(".fa-hand-paper-o")
let scissor =  document.querySelector(".fa-hand-scissors-o")
let aiRock = document.querySelector(".ai .fa-hand-rock-o")
let aiPaper = document.querySelector(".ai .fa-hand-paper-o")
let aiScissor = document.querySelector(".ai .fa-hand-scissors-o")
let button = document.querySelector("button")



function eventHandler (event) {
    rock.style.border = "none";
    paper.style.border = "none";
    scissor.style.border = "none";
    aiRock.style.border = "none";
    aiPaper.style.border = "none";
    aiScissor.style.border = "none";

    if(event.target.dataset.value === `rock`) {
        event.target.style.border = `1px solid green`
        inputValue.innerText = `--${event.target.dataset.value}`
        let aiInput = document.querySelector(`.ai ${aiInputArray[Math.floor(Math.random()*3)]}`);
        if(aiInput.dataset.value === `rock`){
            outputValue.innerText = `--rock`;
            result.innerText = "Its a Tie!"
            aiInput.style.border = "1px solid red"

        } if(aiInput.dataset.value === `paper`){
            outputValue.innerText = `--paper`;
            result.innerText = "You've Lost!"
            lost += 1;
            loss.innerText = lost;
            aiInput.style.border = "1px solid red"
        } if(aiInput.dataset.value === `scissor`){
            outputValue.innerText = `--scissor`;
            result.innerText = "You've Won!";
            won += 1;
            wins.innerText = won;
            aiInput.style.border = "1px solid red"
        }
    } if(event.target.dataset.value === `scissor`) {
        event.target.style.border = `1px solid green`
        inputValue.innerText = `--${event.target.dataset.value}`
        let aiInput = document.querySelector(`.ai ${aiInputArray[Math.floor(Math.random()*3)]}`);
        if(aiInput.dataset.value === `scissor`){
            outputValue.innerText = `--scissor`;
            result.innerText = "Its a Tie!"
            aiInput.style.border = "1px solid red"
        } if(aiInput.dataset.value === `rock`){
            outputValue.innerText = `--rock`;
            result.innerText = "You've Lost!"
            lost += 1;
            loss.innerText = lost;
            aiInput.style.border = "1px solid red"
        } if(aiInput.dataset.value === `paper`){
            outputValue.innerText = `--paper`;
            result.innerText = "You've Won!";
            won += 1;
            wins.innerText = won;
            aiInput.style.border = "1px solid red"
        }
    } if(event.target.dataset.value === `paper`) {
        event.target.style.border = `1px solid green`
        inputValue.innerText = `--${event.target.dataset.value}`
        let aiInput = document.querySelector(`.ai ${aiInputArray[Math.floor(Math.random()*3)]}`);
        if(aiInput.dataset.value === `paper`){
            outputValue.innerText = `--paper`;
            result.innerText = "Its a Tie!"
            aiInput.style.border = "1px solid red"
        } if(aiInput.dataset.value === `scissor`){
            outputValue.innerText = `--scissor`;
            result.innerText = "You've Lost!"
            lost += 1;
            loss.innerText = lost;
            aiInput.style.border = "1px solid red"
        } if(aiInput.dataset.value === `rock`){
            outputValue.innerText = `--rock`;
            result.innerText = "You've Won!";
            won += 1;
            wins.innerText = won;
            aiInput.style.border = "1px solid red"
        }
    } 
}

game.addEventListener("click", eventHandler)

button.addEventListener("click", function() {
    won = 0;
    lost = 0;
    wins.innerText =0
    loss.innerText=0
    rock.style.border = "none";
    paper.style.border = "none";
    scissor.style.border = "none";
    aiRock.style.border = "none";
    aiPaper.style.border = "none";
    aiScissor.style.border = "none";

})

