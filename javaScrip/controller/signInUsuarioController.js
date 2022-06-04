import getUsuarioService from '../service/getUsuarioService.js';
import { regexEmail, regexPassword } from '../regex.js';
import ValidacionError from '../validaciones/ValidacionError.js';

let formulario = document.querySelector('[data-login-formulario]');

formulario.addEventListener('submit', async e => {
    e.preventDefault();

    /* let mess = isEmailValido(getEmail()) ? "" : "El email no es válido";
    let messagePassword = isPasswordValido(getPassword()) ? "" : "La contraseña no es válida";
    */
    /* if(mess != "") {} */
   
   
  /*   getWarningEmail().textContent = mess;
    getWarningPassword().textContent = messagePassword; */

    /* let promise = await Promise.all([validarEmail(getEmail()).catch(error => { return error; }), validarPassword(getPassword()).catch(error => { return error; })]).then(response => {
        console.log(response[0]);
        console.log(response[1]);
    }); */
    
    /* promise.then(response => console.log(response)); */
    /* try {
        let response = await promise;
    } catch (error) {  
        console.log(error);
        getWarning().textContent = error.message;
    } */
    /* .then((partes) => {
        let panA = partes[0];
        let carneCocida = partes[1];

        return [panA, carneCocida];
    })
    .catch(error => {
        let email = error[0];
        let password = error[1]
        
        let warning = getWarning();
        alert(error.message);
        warning.textContent = error.message;
        return [email, password];
    }); */

    /* validarEmail(getEmail()).then(() => validarPassword(getPassword())).catch(error => {
        let warning = getWarning();
        console.log(error + "pass1");
        warning.textContent = error.message;
    }); */

    /* Promise.all([validarEmail(getEmail()), validarPassword(getPassword(getPassword()))]).then(response => console.log(response)); */

   

    /* try {
        validarEmail(getEmail());
    } catch (error) {
        let warning = getWarning();

        warning.textContent = error.message;
    }

    try {
        validarPassword(getPassword());
    } catch (error) {
        let warning = getWarning();
        
        warning.textContent = error.message;
    } */
    
    let usuarioVerificado = await verificarUsuario(getEmail());
    let usuarioLogin = usuarioVerificado[1];

        if(usuarioLogin && isEmailValido(getEmail()) && isPasswordValido(getPassword())) {
            let usuario = usuarioVerificado[0];
            let urlActual = window.location.href;
    
            localStorage.setItem('usuario', JSON.stringify(usuario));
            alert("Bienvenido " + getEmail());
            window.location.replace(urlActual);
        }
});

function validarEmail(email) {
    console.log(getEmail());
    console.log(regexEmail.test(getEmail()));
    let message = "";
    console.log(message);

    if(isEmailValido(email) == false) {
        message = "El email no es válido";
    }
        
    console.log(message);
    return message;
}

function validarPassword(pass) {
    console.log(getPassword());
    console.log(regexPassword.test(getPassword()));
    let message = "";
    console.log(message);

    if(isPasswordValido(pass) == false) {
        message = "La contraseña no es válida";
    }

    console.log(message);

    return message;
}

/* function validarEmail(email) {

    return new Promise((resolve, reject) => {
        if(isEmailValido(email)) {
            resolve('Email validado');
        } else {
            throw new ValidacionError("El email no es válido");
            reject("El email no es válido");
        }
    });
}

function validarPassword(pass) {
    return new Promise((resolve, reject) => {
        if(isPasswordValido(pass)) {
            resolve('Contraseña validada');
        } else {
            reject("La contraseña no es válida");
            throw new ValidacionError("La contraseña no es válida");
        }
    });
} */

function isEmailValido(text) {
    return regexEmail.test(text);
}

function isPasswordValido(pass) {
    return regexPassword.test(pass);
}

function getEmail() { 
    return document.querySelector('[data-login-email]').value;
}

function getPassword() {
    return document.querySelector('[data-login-password]').value;
}

function getWarningEmail() {
    return document.querySelector('.warningEmail');
}

function getWarningPassword() {
    return document.querySelector('.warningPassword');
}

async function verificarUsuario(emailUsuario) {
    try {
        let usuarioRegistrado = await getUsuarioService(emailUsuario);
        let usuario = usuarioRegistrado[0];
        let verificacion = (usuario != undefined) && (usuario.email == emailUsuario) && (usuario.password == getPassword());
        
        return [usuarioRegistrado, verificacion];
    } catch (error) {
        console.log("No se pudo verificar el usuario",error);
    } 
}
