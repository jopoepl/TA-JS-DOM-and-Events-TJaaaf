let form = document.querySelector(`form`)
let movieInput = document.querySelector(`.movie`)
let cancel = document.querySelector(`span`)




function addMovie (event) {
    event.preventDefault();
    let formcontrol = document.createElement(`div`)
    formcontrol.classList.add(`formcontrol`)
    let input = document.createElement(`input`)
    input.type = "checkbox"
    label =  document.createElement(`label`)
    label.for = "event.target.elements.movie.value"
    label.innerText = movieInput.value
    span = document.createElement(`span`)
    span.innerText = "❌"
    if (event.key === "Enter") {
    formcontrol.append(input, label, span)
    form.append(formcontrol)
    }
}


movieInput.addEventListener("keypress", addMovie)


form.addEventListener("click", function (event) {


    if (event.target.localName === "span") {
    event.target.parentElement.remove()
    }
})
