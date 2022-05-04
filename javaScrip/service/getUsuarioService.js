import url from "../url.js";

async function getUsuarioService(email) {
    let urlUsuario = url + '/usuarios' + '?q=' + email;
    
    try {
        let res = await fetch(urlUsuario);

        return await res.json();
    } catch (error) {
        console.log(error);
    }
}



export default getUsuarioService;