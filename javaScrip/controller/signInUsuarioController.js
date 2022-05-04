import getUsuarioService from '../service/getUsuarioService.js';

let formulario = document.querySelector('[data-login-formulario]');

formulario.addEventListener('submit', async e => {
    e.preventDefault();
    verificarLogin(getEmail(), 'http://localhost:5500' + '/index.html');
});

function getEmail() {
    return document.querySelector('[data-login-email]').value;
}

function getPassword() {
    return document.querySelector('[data-login-password]').value;
}

async function verificarUsuario(email) {
    try {
        let usuarioRegistrado = await getUsuarioService(email);
        let usuario = usuarioRegistrado[0];
        let verificacion = (usuario != undefined) && (usuario.email == email) && (usuario.password == getPassword());
        
        return [usuarioRegistrado, verificacion];
    } catch (error) {
        console.log(error);
    } 
}

async function verificarLogin(email, url) {
    let usuarioVerificado = await verificarUsuario(email);
    let usuario = usuarioVerificado[0];
    let usuarioLogin = usuarioVerificado[1];
    console.log(usuarioVerificado);
    
    if(usuarioLogin) {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert("Bienvenido " + getEmail());
        window.location.replace(url);
    } else {
        alert("El usuario o la contraseña es incorrecta");
    }
}