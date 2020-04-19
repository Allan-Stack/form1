function validation(){
    var name = document.getElementById("name").value;
    var nickname = document.getElementById("nickname").value;
    var phone = document.getElementById("phone").value;
    var email_id = document.getElementById("email_id").value;
    var password = document.getElementById("password").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px"

    if(name.length <5){
        text = "please enter valid name"
        error_message.innerHTML = text;
        return false;

    }
    
    if(password.length <5){
        text= "password is weak";
        error_message.innerHTML = text;
        return false;
    }
   
    if(nickname.length <5){
        text= "please enter valid name";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length !=10) {
        text= "please enter valid phone number";
        error_message.innerHTML = text;
        return false;
    }
    if(email_id.indexof("@") == -1 || email_id.length <6) {
        text= "please enter valid phone number";
        error_message.innerHTML = text;
        return false;
    }
    if(password.length <5){
        text= "password is weak";
        error_message.innerHTML = text;
        return false;
    }
    alert ("form submitted sucessfully !" )
   
    return true;

}