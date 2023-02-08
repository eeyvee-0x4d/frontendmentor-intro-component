window.onload = (e) => {
    document.querySelector(".signup__form").reset()
}

const validateInput = (inputFieldId) => {


    // the error message
    let errorMessage = document.createElement("span")
    errorMessage.style = "color: hsl(0, 100%, 74%); font-size: 0.850em; font-style: italic; align-self: end"

    // input style when error
    const errorStyle = "border-color: hsl(0, 100%, 74%); background-image: url(images/icon-error.svg); background-repeat: no-repeat; background-position: right 1rem center; color: hsl(0, 100%, 74%);"

    const normalStyle = "border-color: hsl(249, 10%, 26%); color: hsl(249, 10%, 26%);"

    switch(inputFieldId) {
        case 'first-name': {
            let inputField = document.querySelector(`#${inputFieldId}`)
            
            if(inputField.value === ""){

                inputField.style = errorStyle

                errorMessage.id = "fname-error"
                errorMessage.innerHTML = "First Name cannot be empty"
                inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling)          
            }
            else {
                inputField.style = normalStyle
                if(document.querySelector("#fname-error")) {
                    document.querySelector("#fname-error").remove()
                }
            }
            break;
        }
        case 'last-name': {
            let inputField = document.querySelector(`#${inputFieldId}`)
            
            if(inputField.value === ""){

                inputField.style = errorStyle

                errorMessage.id = "lname-error"
                errorMessage.innerHTML = "Last Name cannot be empty"
                inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling)          
            }
            else {
                inputField.style = normalStyle
                if(document.querySelector("#lname-error")) {
                    document.querySelector("#lname-error").remove()
                }
            }
            break;
        } 
        case 'email': {
            let inputField = document.querySelector(`#${inputFieldId}`)

            const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            
            if(inputField.value === ""){
                
                if(document.querySelector("#email-error") === null) {
                    inputField.style = errorStyle

                    errorMessage.id = "email-error"
                    errorMessage.innerHTML = "Email cannot be empty"
                    inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling)
                } 
                else {
                    document.querySelector("#email-error").innerHTML = "Email cannot be empty"
                }      
            }
            else if (inputField.value.match(emailRegEx) === null){
                if(document.querySelector("#email-error") === null) {
                    inputField.style = errorStyle

                    errorMessage.id = "email-error"
                    errorMessage.innerHTML = "Looks like this is not an email"
                    inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling)
                } 
                else {
                    document.querySelector("#email-error").innerHTML = "Looks like this is not an email"
                }   
            }
            else {
                inputField.style = normalStyle
                if(document.querySelector("#email-error")) {
                    document.querySelector("#email-error").remove()
                }
            }
            break;
        }
        case 'password': {
            let inputField = document.querySelector(`#${inputFieldId}`)
            
            if(inputField.value === ""){

                inputField.style = errorStyle

                errorMessage.id = "password-error"
                errorMessage.innerHTML = "Password cannot be empty"
                inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling)          
            }
            else {
                inputField.style = normalStyle
                if(document.querySelector("#password-error")) {
                    document.querySelector("#password-error").remove()
                }
            }
            break;
        }
    }
}