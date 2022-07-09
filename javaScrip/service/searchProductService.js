import url from "../url.js";

async function searchProductService(nombre) {
    try {
        let response = await fetch(url + '/productos?nombre_like=' + nombre);

        return await response.json();
    } catch (error) {
        console.log("No se pudo obtener el producto " + nombre, error);
    }
    
}

export default searchProductService;