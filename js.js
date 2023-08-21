// grab all four input fields span tags
let name_error = document.getElementById("name-error");

let phone_error = document.getElementById("phone-error");

let email_error = document.getElementById("email-error");

let message_error = document.getElementById("message-error");

// grab our submit button
let submit_error = document.getElementById("submit-error");

// executed when we place something in input field
function validateName(){
    // get element name property value in input field
    var name = document.getElementById("contact-name").value;

    // if name length is 0, display error by populating HTML element through JS identifier

    // if nothing entered
    if (name.length == 0) {
        name_error.innerHTML = "name is required";
    }

    // if not name .match() method to check if first name and last name are seperated by spaces
    if(!name.match(/^[A-Za-z]+\s+[A-Za-z]+$/)){
        name_error.innerHTML = "Write full name";
        return false;
    }
    // no error means valid
    // no error means setting innerHTML of our span element
    name_error.innerHTML = `<i class="fas fa-check-circle"></i>`;

    // return true to validate for submit
    return true;

}

// validate phone
function validatePhone(){
    // grab our phone input fields value
    var phone = document.getElementById("contact-phone").value;

    // check phone length 0
    if(phone.length == 0) {
        phone_error.innerHTML = "phone number is required";
        return false
    }

    // check phone length correct length using innerHTML
    if(phone.length != 10){
        phone_error.innerHTML = "10 digits";
        return false;
    }

    // check phone is all numeric digits between 0 - 9 and of length 10
    if(!phone.match(/^[0-9]{10}$/)){
        phone_error.innerHTML = "phone number is required";
        return false
    }

    // all above are correct
    // set icon to green tick
    // return true for submit form
    phone_error.innerHTML = `<i class="fas fa-check-circle"><i>`;
    return true;
}

// validate email
function validateEmail(){
    // target input field
    var email = document.getElementById("contact-email").value;

    // check length
    if(email.length == 0){
        email_error.innerHTML = "Email is required";
        return false;
    }

    // check formating of email
    if(!email.match(/^[A-Za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,4}$/)){
        email_error.innerHTML = "Email invalid";
        return false;
    }

    // indicate success
    email_error.innerHTML = `<i class="fas fa-check-circle"></i>`;

    // return true for submit
    return true;
}

// check message
function validateMessage(){
    // target input fields value
    var message = document.getElementById("contact-message").value;

    // create a number of required characters
    var required = 20;

    // create a characters left field
    // ;eft = required minus message length
    var left = required - message.length;

    // if left bigger than 0
    // indicate more characters needed
    // populate error with characters left to complete form
    if(left>0){
        // populate characters left
        message_error.innerHTML = left + " more characters";
        // return false
        return false;
    }

    // populate success icon
    message_error.innerHTML = `<i class="fas fa-check-circle"></i>`;

    // return true for submit icon
    return true;

}

// validate form is a final check before submit works
function validateForm(){
    // if not true
    // or if not true
    // or if not true
    // or if not true display message, ask user to fix error
    // if any are not true display error
    // && would be if all true do x
    // ! && not true and not true
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
    // if (!validateName() && !validatePhone() && !validateEmail() && !validateMessage()){
        submit_error.style.display = "block";
        submit_error.innerHTML = "Please fix error to submit";
        setTimeout(function (){submit_error.display = "none";}, 3000);
        return false;
    }
}


//  this would be used to then pass information elsewhere
//  all true
// pass data to network all true do x
function formValidated(){
    if (validateName() && validatePhone() && validateEmail() && validateMessage()){
        submit_error.style.display = "block";
        submit_error.innerHTML = "Please fix error to submit";
        // set a timeout for the error
        setTimeout(function (){submit_error.display = "none";}, 3000);
        return true;
    }
}