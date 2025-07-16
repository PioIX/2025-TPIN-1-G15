class UserInterface{
    constructor(){

    }
    
    getEmail(){
        return document.getElementById("email").value.trim();
    }

    getPassword(){
        return document.getElementById("password").value
    }

    getUser(){
        return document.getElementById("")
    }

    verEmail(){
        const regexEmail = /^[\w.-]+@[a-z]{2,}$/i
        const email = this.getEmail()
        return regexEmail.test(email)
    }

    verPassword(){
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
        const password = this.getPassword();
        return regexPassword.test(password)
    }

}

const ui = new UserInterface();