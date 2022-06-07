let body = document.querySelector(`body`);
let header = document.createElement(`div`)
let container = document.createElement(`div`)
container.classList.add(`container`)
header.classList.add(`header`)
let h1 = document.createElement(`h1`)
h1.innerText = "People of GOT"


let searchbar = document.createElement(`input`)
let buttonbar = document.createElement(`div`)
buttonbar.classList.add(`flex`, `center`)

got.houses.forEach((house, i) => {
    button = document.createElement(`button`);
    button.innerText = house.name;
    button.setAttribute("data-value", house.name)
    buttonbar.append(button);
})



header.append(h1, searchbar)
body.prepend(container)
container.classList.add(`flex`, `row`, `justify-btwn`, `wrap`)
body.prepend(buttonbar)
body.prepend(header)

function createBoxes (person) {
    let box = document.createElement(`div`)
    box.classList.add(`box`,`flex`, `column`, `justify-btwn`, `item-center`)
    let img = document.createElement(`img`)
    let h2 = document.createElement(`h2`)
    let p = document.createElement(`p`)
    let more = document.createElement(`a`)
    img.src = person.image;
    h2.innerText = person.name;
    p.innerText = person.description;
    more.href = person.wikiLink
    more.innerText = "Know More!"
    box.append(img, h2, p, more)
    container.append(box)
    }


let allPeople = got.houses.map(house => {
    house.people.forEach(person => {
        createBoxes(person)
    })
})


function handleFilter (event) {
    container.innerHTML = "";
    let filteredArray = got.houses.filter(house => house.name === event.target.dataset.value);
    filteredArray[0].people.map(person => {
        createBoxes(person)
    })
}

function handleSearch (event) {

    container.innerHTML = "";
    let value = event.target.value
    let final = [];
    got.houses.map(house => {
    final = final.concat(house.people.filter(person => person.name.toLowerCase().includes(value)));
    
}) 
console.log(final)
final.map(person => createBoxes(person))


}

searchbar.addEventListener("keyup", handleSearch)

buttonbar.addEventListener("click", handleFilter)


// if(event.target.dataset.value === "Starks") {
//     got.houses[0].people.map(person => {
//         createBoxes(person)
//     })
// }
// if(event.target.dataset.value === "Lannisters") {
//     got.houses[1].people.map(person => {
//         createBoxes(person)
//     })
// }
// if(event.target.dataset.value === "Baratheons") {
//     got.houses[2].people.map(person => {
//         createBoxes(person)
//     })
// }
// if(event.target.dataset.value === "Targaryens") {
//     got.houses[3].people.map(person => {
//         createBoxes(person)
//     })
// }
// if(event.target.dataset.value === "Starks") {
//     got.houses[4].people.map(person => {
//         createBoxes(person)
//     })
// }
// if(event.target.dataset.value === "Starks") {
//     got.houses[5].people.map(person => {
//         createBoxes(person)
//     })
// }