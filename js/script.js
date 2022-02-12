let fieldsCheck;

function hasCharsCheck(dataToCheck){
    let pattern = /^[a-zA-Z]+$/;
    if (pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}

function hasNumsCheck(dataToCheck){
    let pattern = /^[0-9]+$/;
    if (pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}

function hasEmailCheck(dataToCheck){
    let pattern = /^[a-zA-Z1-9_-]{2,}[.]?[a-zA-Z1-9_-]?[@]{1}[a_zA-Z1-9_-]{2,}[.]{1}[ca|com]{1}$/;
    if (pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}


function initForm(){
    //*grabbing our input and error fields
    let firstName = document.querySelector("#first-name");
    let firstNameError = document.querySelector("#firstNameError");
    let lastName = document.querySelector("#lastName");
    let lastNameError = document.querySelector("#lastNameError");
    // let address = document.querySelector("#address");
    // let addressError = document.querySelector("#addressError");
    let phone = document.querySelector("#phone");
    let phoneError = document.querySelector("#phoneError");
    let email = document.querySelector("#email");
    let emailError = document.querySelector("#emailError");

    //* declaring our data object
    fieldsCheck = [
        {field: firstName, checker: hasCharsCheck, error: firstNameError, msg:"Please enter a valid first name"},
        {field: lastName, checker: hasCharsCheck, error: lastNameError, msg:"Please enter a valid last name"},
        // {field: address, checker: hasCharsNumsCheck, error: addressError, msg:"Please enter a valid address"},
        {field: phone, checker: hasNumsCheck, error: phoneError, msg:"Please enter a valid phone number!"},
        {field: email, checker: hasEmailCheck, error: emailError, msg:"Please enter a valid Email address!"}
    ]
    let formSubmit = document.querySelector("#submit");
    formSubmit.addEventListener("click", formChecker);
}
