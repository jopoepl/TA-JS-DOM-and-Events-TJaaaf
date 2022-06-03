let form = document.querySelector(`form`);
let body =  document.querySelector(`body div`);


let user = {};

let userArray = Object.values(user)

function eventHandler(event) {
    event.preventDefault()
    user.name = form.elements.text.value
    user.email = form.elements.email.value
    user.gender = form.elements.gender.value
    user.color = form.elements.color.value
    user.gender = form.elements.gender.value
    user.range = form.elements.range.value
    user.BookisnonFiction = form.elements.nonfiction.value
    user.Bookisfiction = form.elements.fiction.value
    user.BookisAdv = form.elements.adventure.value
    user.terms = form.elements.terms.value
    form.style.display = "none"

let formOutput = document.createElement(`form`)
formOutput.classList.add(`container`)

let close = document.createElement(`small`)
close.innerText = "close"
close.classList.add(`close`)
close.addEventListener(`click`, function(){
    formOutput.style.display = "none"
    form.reset()
    form.style.display = "block"

})
let hello = document.createElement(`h2`)
hello.innerText = `Hello ${user.name}`
let email = document.createElement(`p`)
email.innerText =`Email: ${user.email}`
let fav = document.createElement(`p`)
fav.innerText =`You Love: ${user.gender}`
let color = document.createElement(`p`)
color.innerText =`Color: ${user.color}`
let rating = document.createElement(`p`)
rating.innerText =`Rating: ${user.range}`
let bookGenre = document.createElement(`p`)
bookGenre.innerText =`Book Genre: ${user.Bookisfiction}`
let terms = document.createElement(`p`)
terms.innerText = `-> You agreed to the Terms and Conditions`


body.append(formOutput)
formOutput.append(close, hello, email, fav, color, rating, bookGenre, terms)
}

form.addEventListener("submit", eventHandler)

console.log(user)





