function main () {
let container = document.querySelector(`.container`)
let body = document.querySelector(`body`)
let inputTodo = document.querySelector(`input`)
let root = document.querySelector(`.root`)
let all = document.querySelector(`.all`)
let active = document.querySelector(`.active`)
let completed = document.querySelector(`.completed`)
let clear = document.querySelector(`.clear`)

// let buttons = document.querySelector(`.buttons`)



let allTodo = JSON.parse(localStorage.getItem(`todos`))|| [];

function addToDoArray (event) {
    if (event.key === `Enter` && event.target.value !== "") {
    allTodo.push ({
        task: event.target.value,
        isDone: false,
    
}) 

addToDo(allTodo, root);
    }
    localStorage.setItem("todos", 
    JSON.stringify(allTodo)
    );


}

function handleDelete (event) {
    let id = event.target.dataset.id
    allTodo.splice(id, 1)
    localStorage.setItem("todos", 
    JSON.stringify(allTodo)
    );
    addToDo(allTodo, root);
}


function handleToggle (event) {
    let id = event.target.dataset.id
    allTodo[id].isDone = !allTodo[id].isDone
    localStorage.setItem("todos", 
    JSON.stringify(allTodo)
    );
    addToDo(allTodo, root);
}


function handleActive (event) {
    let activeTodo = allTodo.filter(ele => (ele.isDone == false))
    addToDo(activeTodo, root);
}


function handleAll (event) {
    addToDo(allTodo, root);
}

function handleCompleted (event) {
    let completedTodo = allTodo.filter(ele => (ele.isDone == true))
    addToDo(completedTodo, root);
}

function clearCompleted (event) {
    let final =[];
    allTodo = allTodo.filter((ele) => ele.isDone == false)
    addToDo(allTodo, root);
}





function addToDo (data, rootElm) {
    rootElm.innerHTML = ""
    data.forEach((todo, i) => {
    let control = document.createElement(`div`);
    control.classList.add(`control`);
    let input = document.createElement(`input`)
    input.type = "checkbox"
    input.checked = todo.isDone
    input.setAttribute("data-id", i)
    input.addEventListener("input", handleToggle)
    let label = document.createElement(`label`)
    label.innerText = todo.task
    let cancel = document.createElement(`span`)
    cancel.innerText = "X"
    cancel.addEventListener("click", handleDelete)
    active.addEventListener("click", handleActive)
    all.addEventListener("click", handleAll)
    completed.addEventListener("click", handleCompleted)
    clear.addEventListener("click", clearCompleted)
    rootElm.append(control)
    control.append(input, label, cancel)
    })
    inputTodo.value = ""
    
}

addToDo(allTodo, root)


container.addEventListener("keypress", addToDoArray)
}

main();


// todo.addEventListener("click", function (event) {


//     if (event.target.localName === "span") {
//     event.target.parentElement.remove()
//     }
// })

// let control = document.createElement(`div`)
// control.classList.add(`control`)
// let input = document.createElement(`input`)
// input.type = "checkbox"
// label.for = "event.target.value"
// allTodo.push({name: event.target.value,
//     isDone: false})
// label.innerText = movieInput.value
// span = document.createElement(`span`)
// span.innerText = "❌"
// if (event.key === "Enter") {
// control.append(input, label, span)
// todo.append(control)
// }