import getUsuarioService from '../service/getUsuarioService.js';
import { regexEmail, regexPassword } from '../regex.js';

let formulario = document.querySelector('[data-login-formulario]');

formulario.addEventListener('submit', async e => {
    e.preventDefault();
    
    let usuarioVerificado = await verificarUsuario(getEmail());
    let usuarioLogin = usuarioVerificado[1];

        if(usuarioLogin && isEmailValido(getEmail()) && isPasswordValido(getPassword())) {
            let usuario = usuarioVerificado[0];
            let urlActual = window.location.href;
    
            localStorage.setItem('usuario', JSON.stringify(usuario));
            alert("Bienvenido " + getEmail());
            window.location.replace(urlActual);
        } else {
            alert("El usuario o la contraseña es incorrecta");
        }
});

/* function validarEmail(email) {
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

/* function getWarningEmail() {
    return document.querySelector('.warningEmail');
}

function getWarningPassword() {
    return document.querySelector('.warningPassword');
} */

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
