let container = document.createElement(`div`);
container.classList.add(`flex`, `justify-btwn`, `wrap`, `container`)
let body = document.querySelector(`body`);
let h1 = document.createElement(`h1`);
h1.innerText = `MEMORY GAME - JJ`

body.prepend(container)
body.prepend(h1)



let iconArray = ["fa-bath", "fa-beer-mug-empty", "fa-bomb", "fa-dragon", "fa-guitar", "fa-motorcycle"
, "fa-socks", "fa-umbrella-beach", "fa-user-astronaut" , "fa-floppy-disk", "fa-ghost", "fa-ice-cream"]

let iconArrayAll = [];
iconArrayAll = iconArrayAll.concat(iconArray, iconArray)

function randomSorting (a,b) {
    return 0.5 - Math.random();
}

function createBoxes () {
    iconArrayAll.sort(randomSorting)
    iconArrayAll.map(ele => {
        let icon = document.createElement(`i`);
        icon.classList.add("fa-solid", ele)
        let questionmark = document.createElement(`i`);
        questionmark.classList.add("fa-solid", "fa-circle-question", "questionmark")
        icon.setAttribute("data-value", ele)
        icon.style.display = "none"
        let box = document.createElement(`div`);
        box.setAttribute("data-value", ele)
        box.classList.add(`flex`, `center`)
        box.classList.add(`box`)
        box.append(questionmark, icon)
        container.append(box)
    })
}

createBoxes();

let checkCard = []; 


function findMatch (event) {
    if(event.target.parentElement.dataset.value !== undefined ) {
        console.log(event.target)
        if(checkCard[1] !== undefined){
            checkCard =[];
        }
        if (checkCard[0] === undefined){
            checkCard.push(event.target.nextElementSibling);
            checkCard[0].style.display = "inline-block"
            checkCard[0].previousElementSibling.style.display = "none"
        } else {
            checkCard.push(event.target.nextElementSibling);
            checkCard[1].style.display = "inline-block"
            checkCard[1].previousElementSibling.style.display = "none"
            console.log(checkCard)
        }
        console.log(checkCard[0] === checkCard[1] )
        if(checkCard[1] !== undefined && checkCard[0].dataset.value === checkCard[1].dataset.value ){
            alert(`match found!`)
            checkCard[0].classList.add(`match`)
            checkCard[1].classList.add(`match`)
        } else if (checkCard[1] !== undefined && checkCard[0] !== checkCard[1]) {
            setTimeout(() => {
                checkCard[0].style.display = "none"
            checkCard[0].previousElementSibling.style.display = "inline-block"
            checkCard[1].style.display = "none"
            checkCard[1].previousElementSibling.style.display = "inline-block"
                
            }, 1000);
        }
    }
}


// function handleClick (event) {

//     if(event.target.parentElement.dataset.value !== undefined && checkCard.length < 2) {

//     let currentSelection = event.target.parentElement.dataset.value
 
//         event.target.nextElementSibling.style.display = "inline-block"
//         event.target.style.display = "none"

//     checkCard.push(currentSelection)
//     console.log(checkCard)
//     let box1 = document.querySelector(`.${checkCard[0]}`)
//     let box2 = document.querySelector(`.${checkCard[1]}`)
//     console.log(checkCard[0] == checkCard[1])

//     if (checkCard[0] === checkCard[1] && checkCard.length > 1) {
//       let matchedBoxes = document.querySelectorAll(`.${checkCard[1]}`)
//       console.log()
//       matchedBoxes[0].classList.add(`match`)
//       matchedBoxes[1].classList.add(`match`)
//       checkCard =[];
//     } 
//     if (checkCard[0] !== checkCard[1] && checkCard.length > 1) {
//         // setTimeout(()=> {
//         console.dir(box1)
//         console.dir(box2)

//         box1.style.display = "none"
//         box1.previousElementSibling.style.display = "inline-block"
//         box2.style.display = "none"
//         box2.previousElementSibling.style.display = "inline-block"
//         checkCard =[];
        
//         // }, 1000)
  
        
//   }
  

// }



// }


container.addEventListener("click", findMatch)

