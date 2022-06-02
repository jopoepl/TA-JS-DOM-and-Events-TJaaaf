let box1 = document.querySelector(`.first`)
let box2 = document.querySelector(`.second`)

box1.addEventListener("click", function () {
    box1.style.backgroundColor = `#${Math.floor(Math.random()*1000000)}`
})

box2.addEventListener(`mousemove`, function () {
    box2.style.backgroundColor = `#${Math.floor(Math.random()*1000000)}`
    console.log(`you have moved your mouse`)
})




