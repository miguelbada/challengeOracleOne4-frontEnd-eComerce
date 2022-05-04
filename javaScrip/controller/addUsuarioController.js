import signUpUsuarioService from "../service/addUsuarioService.js";
import signInUsuarioService from "../service/getUsuarioService.js";

let formulario = document.querySelector('[data-login-formulario]');

formulario.addEventListener('submit', async e => {
    e.preventDefault();

    signUpUsuarioService(getEmail(), getPassword());
});

let user = await signInUsuarioService("miguel@hotmail.com");
console.log(user[0].email);
console.log("test");

function getEmail() {
    return document.querySelector('[data-login-email]').value;
}

function getPassword() {
    return document.querySelector('[data-login-password]').value;
}