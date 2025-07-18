console.log("Functions.js inicializado correctamente.")
console.log(typeof Swal)
// Estos comentarios son solo para verificar que se inicializen correctamente los archivos.

function logIn(){
    const email = ui.getEmail();
    const password = ui.getPassword();

    //Verificamos que los parametros tanto de email como de password no esten vacios.
    if (!email || !password){
    Swal.fire({
        title: "Parametros vacios",
        icon: "error",
    });
    return;
    }

    //Esta vez verificamos que el parametro de email no este vacio.
    if (!email){
        Swal.fire({
        title: "Email vacío",
        text: "Por favor, completá el campo de email.",
        icon: "warning",
    });
    return;
    }

/*
    Con las condiciones dadas en la variable regex dentro del DOM.JS, buscamos verificar ciertas condiciones basicas dentro del gmail (cantidad de letras antes del arroba, el arroba, el dominio, etc).
    if (!ui.verEmail()){
        Swal.fire({
        title: "Parametros vacios",
        icon: "error",
    });
    }

    Todo esto lo voy a usar en la verificacion de registro
*/

    //Ahora verificamos que no se deje el campo del password vacio xd.
    if (!password){
        Swal.fire({
        title: "Contrasena vacío",
        text: "Por favor, completá el campo de contrasena.",
        icon: "warning",
    });
    return;
    }

    if (email === )
}