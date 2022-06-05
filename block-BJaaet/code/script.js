let todo = document.querySelector(`.todo`)
let movieInput = document.querySelector(`.movie`)
let cancel = document.querySelector(`span`)
label =  document.createElement(`label`)




function addMovie (event) {
    let formcontrol = document.createElement(`div`)
    formcontrol.classList.add(`formcontrol`)
    let input = document.createElement(`input`)
    input.type = "checkbox"
    label.for = "event.target.elements.movie.value"
    label.innerText = movieInput.value
    span = document.createElement(`span`)
    span.innerText = "❌"
    if (event.key === "Enter") {
    formcontrol.append(input, label, span)
    todo.append(formcontrol)
    }
}






movieInput.addEventListener("keypress", addMovie)


todo.addEventListener("click", function (event) {


    if (event.target.localName === "span") {
    event.target.parentElement.remove()
    }
})

