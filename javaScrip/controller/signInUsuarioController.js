import getUsuarioService from '../service/getUsuarioService.js';

let formulario = document.querySelector('[data-login-formulario]');
/* console.log(window.location.href); */
formulario.addEventListener('submit', async e => {
    e.preventDefault();
    let usuarioVerificado = await verificarUsuario(getEmail());
    let usuarioLogin = usuarioVerificado[1];
    if(usuarioLogin) {
        let usuario = usuarioVerificado[0];

        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert("Bienvenido " + getEmail());
        /* window.location.assign('https://miguelbada.github.io/challengeOracleOne4-frontEnd-eComerce/index.html'); */
    } else {
        alert("El usuario o la contraseña es incorrecta");
    } 
   
   

    
   
    /* verificarLogin(getEmail(), 'https://miguelbada.github.io/challengeOracleOne4-frontEnd-eComerce'); */
});

function getEmail() {
    return document.querySelector('[data-login-email]').value;
}

function getPassword() {
    return document.querySelector('[data-login-password]').value;
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

async function verificarLogin(emailVerificado, urlBack) {
    try {
        let usuarioVerificado = await verificarUsuario(emailVerificado);
        let usuarioLogin = usuarioVerificado[1];
        
        if(usuarioLogin) {
            let usuarioLogin = usuarioVerificado[0];

            localStorage.setItem('usuario', JSON.stringify(usuarioLogin));
            alert("Bienvenido " + getEmail());
            window.location.replace(urlBack);
        } else {
            alert("El usuario o la contraseña es incorrecta");
        }
    } catch (error) {
        console.log("Se produjo un error al verificar el login", error);
    }
    

}