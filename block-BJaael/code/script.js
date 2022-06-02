
let boxContainer = document.querySelector(`.box-container`)

for(let i = 0; i <= 500; i++) {
    boxEach = document.createElement(`div`)
    boxEach.innerText = `${Math.floor(Math.random()*1000)}`
    boxEach.classList.add(`box`);
    boxContainer.append(boxEach)
}



let box = document.querySelectorAll(`.box`)

let boxArray = Object.values(box);


boxContainer.addEventListener(`mousemove`, function() {
    boxArray.map(box => {
        box.innerText = `${Math.floor(Math.random()*1000)}`
        box.style.backgroundColor = `#${Math.floor(Math.random()*1000000)}`
    })
    })
   
        














