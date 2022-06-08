
let body = document.querySelector(`body`)
let p = document.querySelectorAll(`p`)
let h1 = document.querySelector(`h1`)
let h2 = document.querySelectorAll(`h2`)
let h3 = document.querySelectorAll(`h3`)
let h4 = document.querySelectorAll(`h4`)
let h5 = document.querySelectorAll(`h5`)
let h6 = document.querySelectorAll(`h6`)
let span = document.querySelectorAll(`span`)
let div = document.querySelectorAll(`div`)
let a = document.querySelectorAll(`a`)


let dmButton = document.createElement(`button`)
dmButton.classList.add(`dmButton`)
dmButton.innerText = "Dark Mode Toggle"
body.append(dmButton);

// function removeStyles () {
//     h1.map(ele => ele.style.color = "")
//     h2.map(ele => ele.style.color = "")
//     h3.map(ele => ele.style.color = "")
//     h4.map(ele => ele.style.color = "")
//     h5.map(ele => ele.style.color = "")
//     h6.map(ele => ele.style.color = "")
//     p.map(ele => ele.style.color = "")
//     div.map(ele => ele.style.color = "")
//     span.map(ele => ele.style.color = "")
//     a.map(ele => ele.style.color = "")
// }

allEle = [h2,h3,h4,h5,h6,a]
allEle2 = [p, span]


function toggleDarkMode(event){
    body.classList.toggle(`darkmode`) 
    console.log(h1)
    if(h1 !== null){
    h1.classList.toggle(`darkmode2`) 
    }
    allEle.map(ele => {
        if(ele.length !== 0) {
            ele.forEach(element => {
                console.log(element)
                element.classList.toggle(`darkmode3`)
            })
        }
    })
    allEle2.map(ele => {
        if(ele.length !== 0) {
            ele.forEach(element => {
                console.log(element)
                element.classList.toggle(`darkmode2`)
            })
        }
    })

    div.forEach(element => {
        console.log(element)
        element.classList.toggle(`darkmode4`)
    })
    
    
}





dmButton.addEventListener("click", toggleDarkMode)

