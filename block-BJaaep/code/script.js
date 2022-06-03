let boxEvent = document.querySelectorAll(`.box-event`)
let boxEventP = document.querySelector(`.box-eventp`)

let box2 = document.querySelectorAll(`.box2`)
let box2p = document.querySelector(`.box2p`)



let allBoxes = document.querySelectorAll(`box`)


// console.log(boxEvent)

// let boxEventArray = Object.values(boxEvent)

let sum = 0;

boxEvent.forEach(box => {
    let h2 = document.createElement(`h2`)
    sum = sum + 1;
    h2.innerText = sum;
    h2.style.visibility = "hidden"
    box.append(h2)
    box.addEventListener("click", function() {
        h2.style.visibility = "visible"  
    })
    box.addEventListener("click", function() {
        setTimeout (function(){
            h2.style.visibility = "hidden"}, 5000)
    })
})


let sum1 = 0;
box2.forEach(box => {
    let h2 = document.createElement(`h2`)
    sum1 = sum1 + 1;
    h2.innerText = sum1;
    h2.style.visibility = "hidden"
    box.append(h2)
    
    function handleEvent(event) {
        event.target.firstElementChild.style.visibility = "visible" ;
        setTimeout (function(){
        event.target.firstElementChild.style.visibility = "hidden" }, 5000)
    }
    box2p.addEventListener(`click`, handleEvent)
})



// box2p.addEventListener("click", function(event) {
//     event.target.style.visibility = "visible"  
// })
// box2p.addEventListener("click", function() {
//     setTimeout (function(event){
//         event.target.style.visibility = "visible" }, 5000)
// })



