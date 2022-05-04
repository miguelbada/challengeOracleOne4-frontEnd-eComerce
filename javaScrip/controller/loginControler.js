let loginName = document.querySelector('.login-name');
let usuario = JSON.parse(localStorage.getItem('usuario'))[0];

function login() {
    if(usuario) {
        $('.login-name').css('display', 'block');
        $('.encabezado__container___sign-out').css('display', 'block');
        loginName.textContent = usuario.email;
        $('.encabezado__container___login').css('display', 'none');
    }
} 

let signOut = document.querySelector('[data-sing-out]');

signOut.addEventListener('click', () => {
    localStorage.removeItem('usuario');
    
    let urlActual = window.location.href;
    window.location.replace(urlActual);
})

login();