let form = document.querySelector(`form`);

let userInfo = {};

function checkCharac(str) {
    if(str.value.length < 4) {
     str.nextElementSibling.innerHTML = `${str.name} cannot be less than 4 characters`;
     str.nextElementSibling.style.color = `red`
     str.style.border = "2px solid red"
    } else {
        str.nextElementSibling.style.color = `green`
        str.style.border = "2px solid green"
        str.nextElementSibling.innerHTML = "";

    }
}

function checkNameisNum (str){
    if(str.value.split(``).some(ele => isNaN(ele) == false)) {
        str.nextElementSibling.innerHTML = `${str.name} cannot be a number`;
        str.nextElementSibling.style.color = `red`
        str.style.border = "2px solid red"
    } else {
        str.nextElementSibling.style.color = `green`
        str.style.border = "2px solid green"
        str.nextElementSibling.innerHTML = "";
    }
}

function checkEmail(str) {
    if(str.value.length < 6) {
        str.nextElementSibling.innerHTML = `${str.name} cannot be less than 6 characters`;
        str.nextElementSibling.style.color = `red`
        str.style.border = "2px solid red"
       } else {
           str.nextElementSibling.style.color = `green`
           str.style.border = "2px solid green"
           str.nextElementSibling.innerHTML = "";
   
       }
}

function checkNumber(str) {
    if (typeof str !== `number`) {
    str.nextElementSibling.innerHTML = `${str.name} can only contain numbers`;;
    str.nextElementSibling.style.color = `red`
    str.style.border = "2px solid red"
    }  if(str.value.length < 7) {
        str.nextElementSibling.innerHTML = `${str.name} cannot be less than 7 digits`;
        str.nextElementSibling.style.color = `red`
        str.style.border = "2px solid red"
       } 
       else {
        str.nextElementSibling.style.color = `green`
        str.style.border = "2px solid green"
        str.nextElementSibling.innerHTML = "";

    }
}

function checkPass(pass, cfmpass) {
    if (pass.value !== cfmpass.value) {
    pass.nextElementSibling.innerHTML = `${pass.name} has to be the same as Confirm Password`;
    pass.nextElementSibling.style.color = `red`
    pass.style.border = "2px solid red"
    }
    else {
        pass.nextElementSibling.style.color = `green`
        pass.style.border = "2px solid green"
        pass.nextElementSibling.innerHTML = "";

    }
}


function eventHandler (event)  {
    event.preventDefault();
    let element = event.target.elements;
    let username = element.username;
    userInfo.username = username.value;
    checkCharac(username)
    let name1 = element.name
    userInfo.name = name1.value;
    console.dir(name1)
    checkNameisNum (name1)
    let email = element.email
    userInfo.email = email.value;
    checkEmail(email)
    let phone = element.phone
    userInfo.phone = phone.value;
    checkNumber(phone)
    let pass = element.password
    let cfmPass = element.cfmpassword
    checkPass(pass, cfmPass)
    alert(`User Added Successfully!`)
    form.reset()
}

form.addEventListener("submit", eventHandler);