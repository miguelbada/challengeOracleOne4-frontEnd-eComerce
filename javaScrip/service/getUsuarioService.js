import url from "../url.js";

async function getUsuarioService(email) {
    let urlUsuario = url + '/usuarios/' + '?q='+ email;
    
    try {
        let res = await fetch(urlUsuario);

        return await res.json();
    } catch (error) {
        console.log("Error inesperado, no se puede obtener al usuario", error);
    }
}



export default getUsuarioService;