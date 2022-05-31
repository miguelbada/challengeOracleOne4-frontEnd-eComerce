import admin from "../admin.js";

let loginName = document.querySelector('.login-name');
let userAdmin = admin;
let iconos = document.querySelector('.galeria__imagen-background___icono');

console.log(iconos);

function signIn(user) {
    $('.galeria__imagen-background___icono').hide();

    if(localStorage.getItem("usuario") != null) {
        let usuario = JSON.parse(localStorage.getItem('usuario'))[0];

        login(usuario);
        administrador(usuario, user);
    }

}

function login(usuario) {
        $('.login-name').css('display', 'block');
        $('.encabezado__container___sign-out').css('display', 'block');
        loginName.textContent = usuario.email;
        $('.encabezado__container___login').css('display', 'none'); 
}

function administrador(usuario1, usuario2) {
    if(usuario1.email == usuario2) {
        $('.galeria__imagen-background___icono').css('display', 'block');
    }
}

let signOut = document.querySelector('[data-sing-out]');

signOut.addEventListener('click', () => {
    localStorage.removeItem('usuario');
    
    let urlActual = window.location.href;
    window.location.replace(urlActual);
})

signIn(userAdmin);