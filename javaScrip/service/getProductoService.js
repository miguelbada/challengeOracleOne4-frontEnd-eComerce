import url from "../url.js";

async function getProductoService(id) {
    try {
        let response = await fetch(url + '/productos/' + id);

        return await response.json();
    } catch (error) {
        console.log("No se pudo obtener el producto " + id, error);
    }
    
}



export default getProductoService;