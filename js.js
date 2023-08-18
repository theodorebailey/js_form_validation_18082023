
let name_error = document.getElementById("name-error");

let phone_error = document.getElementById("phone-error");

let email_error = document.getElementById("email-error");

let message_error = document.getElementById("message-error");

let submit_error = document.getElementById("submit-error");

// executed when we place something in input field
function validateName(){

    var name = document.getElementById("contact-name").value;

    // if name length is 0, display error by populating HTML element through JS identifier
    if (name.length == 0) {
        name_error.innerHTML = "name is required";
    }

    if(!name.match(/^[A-Za-z]+\s+[A-Za-z]+$/)){
        name_error.innerHTML = "Write full name";
        return false;
    }
    // no error means valid
    name_error.innerHTML = `<i class="fas fa-check-circle"></i>`;

    return true;

}

function validatePhone(){

    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0) {
        phone_error.innerHTML = "phone number is required";
        return false
    }

    if(phone.length != 10){
        phone_error.innerHTML = "10 digits";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phone_error.innerHTML = "phone number is required";
        return false
    }

    phone_error.innerHTML = `<i class="fas fa-check-circle"><i>`;
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        email_error.innerHTML = "Email is required";
        return false;
    }

    if(!email.match(/^[A-Za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,4}$/)){
        email_error.innerHTML = "Email invalid";
        return false;
    }

    email_error.innerHTML = `<i class="fas fa-check-circle"></i>`;

    return true;
}

function validateMessage(){

    var message = document.getElementById("contact-message").value;

    var required = 20;

    var left = required - message.length;

    if(left>0){
        message_error.innerHTML = left + " more characters";
        return false;
    }

    message_error.innerHTML = `<i class="fas fa-check-circle"></i>`;

    return true;

}

function validateForm(){

    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submit_error.style.display = "block";
        submit_error.innerHTML = "Please fix error to submit";
        setTimeout(function (){submit_error.display = "none";}, 3000);
        return false;
    }
}